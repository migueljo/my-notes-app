require('../utils/auth/setup-auth-strategies')

const { Router } = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')

const userService = require('../services/user.service')
const config = require('../config')

const router = Router()

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = await userService.findByEmail(req.body.email, req.body.password)
      const token = jwt.sign({ sub: user.id }, config.jwtSecret)

      res.json({ user, token })
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router
