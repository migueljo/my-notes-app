const { Router } = require('express')
const passport = require('passport')

const validatorHandler = require('../middleware/validator-handler.middleware')
const { getUserSchema, createUserSchema } = require('../schemas/user.schema')
const userService = require('../services/user.service')

const userRouter = Router()

userRouter.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const user = await userService.findOne(req.params.id)
      res.json(user)
    } catch (error) {
      next(error)
    }
  }
)

userRouter.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const user = await userService.create(req.body)
      res.json(user)
    } catch (error) {
      next(error)
    }
  }
)

userRouter.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const updatedUser = await userService.update(req.params.id, req.body)
      res.json(updatedUser)
    } catch (error) {
      next(error)
    }
  }
)

userRouter.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const id = req.params.id
      await userService.remove(id)
      res.json({ id })
    } catch (error) {
      next(error)
    }
  }
)

module.exports = userRouter
