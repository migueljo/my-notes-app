const { Strategy, ExtractJwt } = require('passport-jwt')
const config = require('../../config')

module.exports = new Strategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret
}, async (payload, done) => {
  done(null, payload)
})
