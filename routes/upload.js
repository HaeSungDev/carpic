const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
})
const upload = multer({ storage : storage});
const router = express.Router();

router.post('/', upload.single('carpic'), function(req, res) {
    console.log('success');
    res.sendStatus(200);
});

module.exports = router;