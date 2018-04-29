const express = require('express');
const multer = require('multer');

const upload = multer({ dest : 'public/images'});
const router = express.Router();

router.post('/', upload.single('picture'), function(req, res) {
    
});

module.exports = router;