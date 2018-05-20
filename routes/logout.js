const express = require('express');
const router = express.Router();

router.post('/', async function(req, res, next) {
    if (req.session.user) {
        req.session.destroy();
    }
    res.sendStatus(200);
});

module.exports = router;