const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    description: String,
    category: String,
    token: {
        type: String,
    },
    fileID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'fs.files'
    },
    posterID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'fs.files'
    }
});


const Movie = mongoose.model('Movies', MovieSchema);
module.exports = Movie;
