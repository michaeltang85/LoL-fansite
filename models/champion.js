const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Create Schema
const championSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    lore: {
        type: String
    },
    imageURL: {
        type: String
    }
});

module.exports = champion = mongoose.model('champion', championSchema);