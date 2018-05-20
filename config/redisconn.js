const redis = require('redis');

let redisConf = {};

// 배포 시에만 클라이언트 생성
if (process.env.NODE_ENV == 'production') {
    redisConf = {
        host: '127.0.0.1',
        port: '6379',
        client: redis.createClient(),
    }
}

module.exports = redisConf;