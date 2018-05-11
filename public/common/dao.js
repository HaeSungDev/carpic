var connection = require('../config/dbconn');

var dao = {
    query: function(sql, params) {
        return new Promise(function (resolve, reject) {
            connection.query(sql, params, function (error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

module.exports = dao;