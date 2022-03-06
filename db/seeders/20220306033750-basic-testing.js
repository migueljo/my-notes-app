const { USER_TABLE } = require('../models/user.model')
const { NOTE_TABLE } = require('../models/note.model')
const { IMAGE_TABLE } = require('../models/image.model')
const { TAG_TABLE } = require('../models/tag.model')
const { NOTE_TAG_TABLE } = require('../models/note-tag.model')

const { getUsers, getNotes, getTags, getImages, getNotesTags } = require('../data/basic-testing')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(USER_TABLE, await getUsers(), {})
    await queryInterface.bulkInsert(NOTE_TABLE, getNotes(), {})
    await queryInterface.bulkInsert(IMAGE_TABLE, getImages(), {})
    await queryInterface.bulkInsert(TAG_TABLE, getTags(), {})
    await queryInterface.bulkInsert(NOTE_TAG_TABLE, getNotesTags(), {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(USER_TABLE, null, {})
    await queryInterface.bulkDelete(NOTE_TABLE, null, {})
    await queryInterface.bulkDelete(IMAGE_TABLE, null, {})
    await queryInterface.bulkDelete(TAG_TABLE, null, {})
    await queryInterface.bulkDelete(NOTE_TAG_TABLE, null, {})
  }
}
