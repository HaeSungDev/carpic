const express = require('express');
const multer = require('multer');
const fs = require('fs');
const gm = require('gm');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        req.file = file;
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

const upload = multer({ storage: storage, fileFilter: fileFilter });
const router = express.Router();

router.post('/', upload.single('carpic'), (req, res, next) => {
    if (req.isMatch) {
        gm('/public/images/' + req.file.originalname)
            .resize(240, 240)
            .noProfile()
            .write('/public/thumbnail/' + req.file.originalname, (err) => console.log(err));
        res.sendStatus(200);
    } else {
        res.sendStatus(415);
    }
});

router.get('/', (req, res) => {
    const carpicList = [];

    fs.readdir('../public/thumbnail', (err, files) => {
        files.forEach((value) => {
            carpicList.push({
                thumbnail_path: '/public/images/' + value,
                carpic_path: '/public/images/' + value,
            });
        });
    });

    res.send(carpicList);
});

module.exports = router;