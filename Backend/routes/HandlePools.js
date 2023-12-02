const express = require("express");
const router = express.Router();
const Pool = require("../pool");


router.get('/', async (req, res) => {
    try {
        const pools = await Pool.find()
        res.status(200).json(pools)
    } catch (err) {
        res.status(500).json({ Message: err.message })
    }
})

router.get('/:id', getPool, (req, res) => {
    res.send(res.Pool)
})

router.post('/', async (req, res) => {
    const pool = new Pool({
        Title: req.body.Title,
        Options: req.body.Options,
        MultipleChoice: req.body.MultipleChoice,
        Owner: req.body.Owner
    })

    try {
        const newPool = await pool.save();
        res.status(201).json(newPool)
    } catch (err) {
        res.status(400).json({ Message: err.message })
    }
})

router.patch('/:id', getPool, async (req, res) => {

    for(let i = 0; i < 3; i++) {
        res.Pool.Options[i].votes += req.body.Options[i];
    }

    try{
        const modPool = await res.Pool.save()
        res.status(200).json(modPool)
    } catch (err) {
        res.status(500).json({ Message: err.message })
    }
})

router.delete('/:id', async (req, res) => {
    try{
        await Pool.findByIdAndDelete(req.params.id)
        res.status(200).json({ Message: "Pool deleted" })
    } catch (err) {
        res.status(500).json({ Message: err.message })
    }


})

async function getPool(req, res, next) {
    let pool;
    try {
        const id = req.params.id;
        pool = await Pool.findById(id)
        if (pool == null) {
            return res.status(404).json({ Message: "Cannot find pool" })
        }
    } catch(err) {  
        return res.status(500).json({ Message: err.message })
    }

    res.Pool = pool;
    next();
}


module.exports = router