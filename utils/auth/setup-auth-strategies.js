const passport = require('passport')
const localStrategy = require('./local.strategy')

passport.use(localStrategy)
