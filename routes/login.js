const express = require('express');
const router = express.Router();
const dao = require('../common/dao');

router.get('/', function(req, res) {
  if (!req.session.user) {
    res.sendStatus(401);
  } else {
    res.json({
      userid: req.session.user
    })
  }
});

router.post('/', async function(req, res, next) {
  const userid = req.body.userid;
  const passwd = req.body.passwd;

  const isPassed = await check(userid, passwd);

  if (isPassed) {
    if (!req.session.user) {
      req.session.user = userid;
    }
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});

router.delete('/', (req, res) => {
  if (req.session.userid) {
    req.destroy();
  } 

  res.sendStatus(204);
});

async function check(userid, passwd) {
  const sql = `select * from user 
  where userid = ? and passwd = password(?)`;
  const params = [userid, passwd];
  const results = await dao.query(sql, params);
  
  return results.length == 1;
}

module.exports = router;