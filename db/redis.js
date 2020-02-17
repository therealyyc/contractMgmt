const redis = require('redis')
const { REDIS_CONF } = require('../config/redis')

const redisClient = redis.createClient(REDIS_CONF)
redisClient.on("error", function (err) {
  console.log("Error " + err);
});

function redisSet(key, value) {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  client.set(key, value, redis.print);
}

function redisGet(key) {
  return new Promise((resolve, reject) => {
    client.get(key, function (err, reply) {
      if (err) {
        console.error('err', err)
        reject(err)
        return;
      }
      if (reply == null) {
        resolve(null)
        return
      }
      //如果解析出来是对象,用try catch来兼容格式
      try {
        resolve(
          JSON.parse(reply)
        )
      } catch (e) {
        resolve(reply)
      }

    });
  })
}

// client.quit() 单例

module.exports = redisClient
