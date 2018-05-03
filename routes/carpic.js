const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const gm = require('gm');

// multer로 이미지 파일 업로드 처리
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        req.file = file;
        cb(null, file.originalname);
    },
});
// 파일 확장자 확인 필터
const fileFilter = (req, file, cb) => {
    const isMatch = ['.png', '.jpg', '.bmp', '.gif'].some((ext) => {
        return (file.originalname.slice(file.originalname.lastIndexOf('.')).toUpperCase() == ext.toUpperCase())
    })
    req.isMatch = isMatch;

    cb(null, isMatch)
}

const upload = multer({ storage: storage, fileFilter: fileFilter });
const router = express.Router();

// POST 메소드로 이미지 업로드 요청 처리.
router.post('/', upload.single('carpic'), (req, res, next) => {
    if (req.isMatch) {
        gm(path.resolve(__dirname, '../public/images/' + req.file.originalname))
            .noProfile()
            .thumb(300, 300, path.resolve(__dirname, '../public/thumbnail/' + req.file.originalname), (err) => {if (err) console.log(err)});
        res.sendStatus(200);
    } else {
        res.sendStatus(415);
    }
});

// GET 메소드로 이미지 리스트의 경로 요청 처리.
router.get('/', (req, res) => {
    fs.readdir('public/thumbnail', (err, files) => {
        if (err)
            res.send([]);

        const carpicList = [];
        files.forEach((value) => {
            carpicList.push({
                thumbnail_path: 'thumbnail/' + value,
                carpic_path: 'images/' + value,
            });
        });
        res.send(carpicList);
    });
});

module.exports = router;