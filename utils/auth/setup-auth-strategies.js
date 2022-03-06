const passport = require('passport')
const jwtStrategy = require('./jwt.strategy')
const localStrategy = require('./local.strategy')

passport.use(localStrategy)
passport.use(jwtStrategy)
