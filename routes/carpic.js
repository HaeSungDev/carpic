const express = require('express');
const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const fileFilter = (req, file, cb) => {
    const isMatch = ['.png', '.jpg', '.bmp', '.gif'].some((ext) => {
        return (file.originalname.slice(file.originalname.lastIndexOf('.')).toUpperCase() == ext.toUpperCase())
    })
    req.isMatch = isMatch;

    cb(null, isMatch)
}

const upload = multer({ storage: storage, fileFilter: fileFilter});
const router = express.Router();

router.post('/', upload.single('carpic'), (req, res, next) => {
    if (req.isMatch) 
        res.sendStatus(200);
    else
        res.sendStatus(415);
});

router.get('/', (req, res) => {
    const carpicList = [];

    fs.readdir('../public/thumbnail', (err, files) => {
        files.forEach((value) => {
            carpicList.push(value);
        });
    });

    res.send(carpicList);
});

module.exports = router;