const connection = require('../config/dbconn');

const dao = {
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