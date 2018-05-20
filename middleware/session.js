const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redisConn = require('../config/redisconn');

const sessionMiddleware = session({
    secret: 'oaighreihioaghe',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1800000 - (new Date().getTimezoneOffset() * 60 * 1000),
    },
});

if (process.env.NODE_ENV === 'production') {
    sessionMiddleware.store = new RedisStore(redisConn);
}

module.exports = sessionMiddleware;