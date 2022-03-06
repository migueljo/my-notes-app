const { USER_TABLE } = require('../models/user.model')
const { NOTE_TABLE } = require('../models/note.model')
const { IMAGE_TABLE } = require('../models/image.model')
const { TAG_TABLE } = require('../models/tag.model')
const { NOTE_TAG_TABLE } = require('../models/note-tag.model')

const data = require('../data/basic-testing')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(USER_TABLE, data.users, {})
    await queryInterface.bulkInsert(NOTE_TABLE, data.notes, {})
    await queryInterface.bulkInsert(IMAGE_TABLE, data.images, {})
    await queryInterface.bulkInsert(TAG_TABLE, data.tags, {})
    await queryInterface.bulkInsert(NOTE_TAG_TABLE, data.notesTags, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(USER_TABLE, null, {})
    await queryInterface.bulkDelete(NOTE_TABLE, null, {})
    await queryInterface.bulkDelete(IMAGE_TABLE, null, {})
    await queryInterface.bulkDelete(TAG_TABLE, null, {})
    await queryInterface.bulkDelete(NOTE_TAG_TABLE, null, {})
  }
}
