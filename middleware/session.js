const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redisConn = require('../config/redisconn');

module.exports = session({
    //store: new RedisStore(redisConn),
    secret: 'oaighreihioaghe',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1800000 - (new Date().getTimezoneOffset() * 60 * 1000),
    },
});