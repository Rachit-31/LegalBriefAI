const mongoose = require('mongoose');

const paragraphSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming you have a User model
        required: true
    },
    paragraph: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const ParagraphData = mongoose.model('ParagraphData', paragraphSchema);

module.exports = ParagraphData;
