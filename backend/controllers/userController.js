const User = require('../models/userModel')

module.exports.index = async (req, res) => {
    try {
        var users = await User.find().select('email username name _id role').sort({ createdAt: 1 })
        res.status(200).json(users)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.delete = async (req, res) => {
    try {
        // first find the post, store it in a variable, then delete it from database
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'deleted successfully' })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.update = async (req, res) => {
    try {
        // add a third argument to the update { new: true } to return the new updated version of the document
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            username: updatedUser.username,
            email: updatedUser.email,
            name: updatedUser.name,
            _id: updatedUser._id,
            role: updatedUser.role

        })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.show = async (req, res) => {
    try {
        // populate replaces the ids with actual documents/objects we can use
        const foundUser = await User.findById(req.id)
        res.status(200).json({
            username: foundUser.username,
            email: foundUser.email,
            name: foundUser.name,
            _id: foundUser._id,
            role: foundUser.role

        })

    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

module.exports.get = async (req, res) => {
    try {
        // populate replaces the ids with actual documents/objects we can use
        const foundUser = await User.findById(req.params.id)
        res.status(200).json({
            username: foundUser.username,
            email: foundUser.email,
            name: foundUser.name,
            _id: foundUser._id,
            role: foundUser.role

        })
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}
