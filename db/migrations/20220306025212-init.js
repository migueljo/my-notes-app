const { IMAGE_TABLE, ImageSchema } = require('../models/image.model')
const { NOTE_TAG_TABLE, NoteTagSchema } = require('../models/note-tag.model')
const { NOTE_TABLE, NoteSchema } = require('../models/note.model')
const { TAG_TABLE, TagSchema } = require('../models/tag.model')
const { USER_TABLE, UserSchema } = require('../models/user.model')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, UserSchema)
    await queryInterface.createTable(NOTE_TABLE, NoteSchema)
    await queryInterface.createTable(TAG_TABLE, TagSchema)
    await queryInterface.createTable(NOTE_TAG_TABLE, NoteTagSchema)
    await queryInterface.createTable(IMAGE_TABLE, ImageSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(NOTE_TABLE, { force: true })
    await queryInterface.dropTable(IMAGE_TABLE, { force: true })
    await queryInterface.dropTable(TAG_TABLE, { force: true })
    await queryInterface.dropTable(USER_TABLE, { force: true })
    await queryInterface.dropTable(NOTE_TAG_TABLE, { force: true })
  }
}
