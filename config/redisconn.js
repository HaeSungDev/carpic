const redis = require('redis');

module.exports = {
    host: '127.0.0.1',
    port: '6379',
    client: redis.createClient(),
}