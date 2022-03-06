const joi = require('joi')

const email = joi.string().email()
const password = joi.string().min(8)

const loginUserSchema = joi.object({
  email: email.required(),
  password: password.required()
})

module.exports = { loginUserSchema }
