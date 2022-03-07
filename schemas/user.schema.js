const joi = require('joi')

const id = joi.number().integer()
const email = joi.string().email()
const password = joi.string().min(8)
const name = joi.string()

const getUserSchema = joi.object({
  id: id.required()
})

const createUserSchema = joi.object({
  email: email.required(),
  password: password.required(),
  name: password.required()
})

const updateUserSchema = joi.object({
  email,
  password,
  name
})

module.exports = { getUserSchema, createUserSchema, updateUserSchema }
