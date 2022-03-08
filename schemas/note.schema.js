const joi = require('joi')

const id = joi.number().integer()
const title = joi.string()
const body = joi.string()
const userId = joi.number().integer()

const getNoteSchema = joi.object({
  id: id.required()
})

const createNoteSchema = joi.object({
  title: title.required(),
  body,
  userId: userId.required()
})

const updateNoteSchema = joi.object({
  title,
  body
})

module.exports = { getNoteSchema, createNoteSchema, updateNoteSchema }
