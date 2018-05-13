const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'dev',
  password: 'devpass',
  database: 'carpic',
});

module.exports = connection;