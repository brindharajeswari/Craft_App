const User = require('../models/userModel')

async function show(req, res) {
    try {
        const foundUser = await User.findById(req.id)
        
        res.json({ 
            username: foundUser.username, 
            email: foundUser.email,
            name: foundUser.name 
        })

    } catch (error) {
        res.json({ error: error.message })
    }
}

module.exports = {
    show
}