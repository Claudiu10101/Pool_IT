const express = require("express");
const router = express.Router();
const User = require("../user");


router.get('/:id', getUser, (req, res) => {
    res.send(res.User)
})

router.post('/', async (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password,
    })

    try {
        const newUser = await user.save();
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ Message: err.message })
    }
})

router.delete('/:id', async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json({ Message: "User deleted" })
    } catch (err) {
        res.status(500).json({ Message: err.message })
    }
})

async function getUser(req, res, next) {
    let user;
    try {
        const id = req.params.id;
        user = await User.findById(id)
        if (user == null) {
            return res.status(404).json({ Message: "Cannot find user" })
        }
    } catch(err) {  
        return res.status(500).json({ Message: err.message })
    }

    res.User = user;
    next();
}


module.exports = router