const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    college: String,
    branch: String,
    year: Number,
    subject: String
})

module.exports = mongoose.model('Post', PostSchema);