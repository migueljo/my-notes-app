const boom = require('@hapi/boom')

function logErrors (error, req, res, next) {
  console.error(error)
  next(error)
}

function errorHandler (error, req, res, next) {
  res.status(500).json({
    message: error.message,
    stack: error.stack
  })
}

function boomErrorHandler (error, req, res, next) {
  if (boom.isBoom(error)) {
    const { output } = error
    res.status(output.statusCode).json(output.payload)
  }
}

module.exports = { logErrors, errorHandler, boomErrorHandler }
