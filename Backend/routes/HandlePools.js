const express = require("express");
const router = express.Router();
const Pool = require("../pool");
const User = require("../user");
const jwt = require('jsonwebtoken');
const pool = require("../pool");


router.get('/', async (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    var currUser = null;
    if (token != "guest") {
        currUser = jwt.decode(token, process.env.ACCESS_TOKEN_SECRET).user
        
    }
    console.log(currUser)
    console.log(token)
    try {
        const pools = await Pool.find()

        let result = pools.map(pool => {
            let can_delete = false;
            if (currUser != null) {
                can_delete = currUser._id == pool.Owner
            }
            return {
                Id: pool._id,
                Title: pool.Title,
                Options: pool.Options,
                MultipleChoice: pool.MultipleChoice,
                canDelete: can_delete,
            };
        });

        console.log(result)
        res.status(200).json(result)
        
    } catch (err) {
        res.status(500).json({ Message: err.message })
    }
})

router.post('/', authenticateToken, async (req, res) => {
    const pool = new Pool({
        Title: req.body.Title,
        Options: req.body.Options,
        MultipleChoice: req.body.MultipleChoice,
        Owner: req.user._id
    })
    try {
        const newPool = await pool.save();
        res.status(201).json(newPool)
    } catch (err) {
        res.status(400).json({ Message: err.message })
    }
})

router.patch('/:id', [authenticateToken, getPool], async (req, res) => {
    const isInArray = res.Pool.Voters.some((Voter) => {
        return Voter.equals(req.user._id);
    });
    if (isInArray) {
        return res.status(403).json({ Message: "User already voted" })
    }
    else {
        res.Pool.Voters.push(req.user._id)

        for (let i = 0; i < 3; i++) {
            res.Pool.Options[i].votes += req.body.votes[i];
        }

        try {
            const modPool = await res.Pool.save()
            res.status(200).json(modPool)
        } catch (err) {
            res.status(500).json({ Message: err.message })
        }
    }
})

router.delete('/:id', [authenticateToken, getPool], async (req, res) => {
    try {
        if (req.user._id == res.Pool.Owner) {
            await Pool.findByIdAndDelete(req.params.id)
            res.status(200).json({ Message: "Pool deleted" })
        }
        else {
            res.status(403).json({ Message: "Not the owner" })
        }
    } catch (err) {
        res.status(500).json({ Message: err.message })
    }


})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user.user
        next()
    })
}

async function getPool(req, res, next) {
    let pool;
    try {
        const id = req.params.id;
        pool = await Pool.findById(id)
        if (pool == null) {
            return res.status(404).json({ Message: "Cannot find pool" })
        }
    } catch (err) {
        return res.status(500).json({ Message: err.message })
    }

    res.Pool = pool;
    next();
}


module.exports = router