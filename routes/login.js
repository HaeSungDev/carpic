var express = require('express');
var router = express.Router();
var dao = require('../common/dao');

router.post('/', async function(req, res, next) {
  var userid = req.body.userid;
  var passwd = req.body.passwd;

  var isPassed = await check(userid, passwd);

  if (isPassed) {
    res.json({result: 'success'});
  } else {
    res.json({result: 'fail'});
  }
});

async function check(userid, passwd) {
  var sql = `select * from user 
  where userid = ? and passwd = password(?)`;
  var params = [userid, passwd];
  var results = await dao.query(sql, params);
  
  return results.length == 1;
}

module.exports = router;