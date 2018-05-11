const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'devuser',
  password: 'devpass',
  database: 'devdb',
});

module.exports = connection;