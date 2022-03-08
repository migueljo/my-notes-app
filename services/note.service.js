const boom = require('@hapi/boom')

const sequelize = require('../libs/sequelize')

async function find (userId) {
  const notes = await sequelize.models.Note.findAll({
    where: { userId }
  })
  return notes
}

async function findOne (noteId, userId) {
  const note = await sequelize.models.Note.findOne({
    where: { id: noteId, userId }
  })
  if (!note) throw boom.notFound()

  return note
}

async function create (data) {
  const note = await sequelize.models.Note.create(data)
  return note
}

async function update (noteId, userId, changes) {
  const note = await findOne(noteId, userId)
  await note.update(changes)
  return note
}

async function remove (noteId, userId) {
  const note = await findOne(noteId, userId)
  note.destroy()
  return { id: noteId }
}

const noteService = { find, findOne, create, update, remove }

module.exports = noteService
