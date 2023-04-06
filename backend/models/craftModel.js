const mongoose = require('mongoose')

const Schema = mongoose.Schema

const craftSchema = new Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    link: { type: String, required: true },
    instruction: { type: String, required: true },
    user: { type: String, required: true },
    comments: [{
        // an id referencing the comment
        type: mongoose.Types.ObjectId,
        // search for it in the Comments collection
        ref: 'Comment'
    }]

},
    { timestamps: true }
);

const Craft = mongoose.model('Craft', craftSchema)

module.exports = Craft