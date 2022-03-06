const boom = require('@hapi/boom')

function validatorHandler (schema, key) {
  return (req, res, next) => {
    const validation = schema.validate(req[key], { abortEarly: false })
    if (validation.error) {
      next(boom.badRequest(validation.error))
      return
    }

    next()
  }
}

module.exports = validatorHandler
