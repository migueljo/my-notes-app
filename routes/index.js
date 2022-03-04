const express = require('express')
const notesRouter = require('./notes.router')

function routerApi (app) {
  const apiRouter = express.Router()
  app.use('/api/v1', apiRouter)

  apiRouter.use('/notes', notesRouter)
}

module.exports = routerApi
