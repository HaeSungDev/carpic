const express = require('express');
const router = express.Router();
const dao = require('../common/dao');

router.post('/', async function(req, res, next) {
  const userid = req.body.userid;
  const passwd = req.body.passwd;

  const isPassed = await check(userid, passwd);

  if (isPassed) {
    if (!req.session.user) {
      req.session.user = userid;
    }
    res.json({result: 'success'});
  } else {
    res.json({result: 'fail'});
  }
});

async function check(userid, passwd) {
  const sql = `select * from user 
  where userid = ? and passwd = password(?)`;
  const params = [userid, passwd];
  const results = await dao.query(sql, params);
  
  return results.length == 1;
}

module.exports = router;