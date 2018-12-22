const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path')
const router = express.Router();
const UIDGenerator = require('uid-generator');
const uidgen = new UIDGenerator();


// to generate unique token for each uploaded file
let token;
uidgen
    .generate()
    .then(uid => token = uid);

const Movie = require('../models/Movie');

const GridFsStorage = require('multer-gridfs-storage');

const storage = new GridFsStorage({
    url: 'mongodb://127.0.0.1:27017/kannywoodtv-dev',
    file: (req, file) => {
        return {
            filename: req.body.name + path.extname(file.originalname)
        };
    }
});
const upload = multer({
    storage
});

// file upload url files/upload

router.post('/', upload.array('file', 'file'), (req, res) => {
    console.log(req.files)
    const movie = new Movie({
        description: req.body.Description,
        category: req.body.Category,
        token: token,
        fileID:  req.files[0].id,
        posterID:  req.files[1].id
    });
    console.log(movie)
    movie.save(function(err) {
        if (err) {
            console.log(err);
            return;
        }

        res.json({
            "success": "true"
        });
    });
});


router.get('/movies', (req, res) => {
  console.log(req.locals.user)
  Movie.find()
  .populate("fileID")
  .then(files => res.send(files))
  .catch(err => res.send(err))
});

module.exports = router;
