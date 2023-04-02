const Crafts = require('../models/craftModel')
const Comments = require('../models/commentModel')

module.exports.seed = async (req, res) => {
    res.redirect('/craft')
}

module.exports.index = async (req, res) => {
    try {
        const crafts = await Crafts.find().sort({ createdAt: 1 })
        res.status(200).json(crafts)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.delete = async (req, res) => {
    try {
        // first find the post, store it in a variable, then delete it from database
        const craft = await Crafts.findByIdAndDelete(req.params.id)
        // delete all comments where the comment id 
        await Comments.deleteMany({ _id: { 
            // equals/matches any comment ids in this array
            $in: craft.comments 
        }})
        res.status(200).json({ message: 'deleted successfully' })
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.update = async (req, res) => {
    try {
        // add a third argument to the update { new: true } to return the new updated version of the document
        const updatedCraft = await Crafts.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedCraft)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.create = async (req, res) => {
    try {
        const craft = await Crafts.create(req.body)
        res.status(200).json(craft)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.show = async (req, res) => {
    try {
        // populate replaces the ids with actual documents/objects we can use
        const craft = await Crafts.findById(req.params.id).populate('comments')
        res.status(200).json(craft)
    } catch(err) {
        res.status(404).json({ error: err.message })
    }
}


