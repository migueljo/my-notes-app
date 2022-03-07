const express = require('express')
const notesRouter = require('./notes.router')
const authRouter = require('./auth.router')
const userRouter = require('./user.router')

function routerApi (app) {
  const apiRouter = express.Router()
  app.use('/api/v1', apiRouter)

  apiRouter.use('/auth', authRouter)
  apiRouter.use('/notes', notesRouter)
  apiRouter.use('/users', userRouter)
}

module.exports = routerApi
