const { ImageSchema, Image, IMAGE_TABLE } = require('./models/image.model')
const { NoteTag, NoteTagSchema, NOTE_TAG_TABLE } = require('./models/note-tag.model')
const { Note, NoteSchema, NOTE_TABLE } = require('./models/note.model')
const { Tag, TagSchema, TAG_TABLE } = require('./models/tag.model')
const { User, UserSchema, USER_TABLE } = require('./models/user.model')

function setupModels (sequelize) {
  User.init(UserSchema, { sequelize, tableName: USER_TABLE, timestamps: false })
  Note.init(NoteSchema, { sequelize, tableName: NOTE_TABLE, timestamps: false })
  Image.init(ImageSchema, { sequelize, tableName: IMAGE_TABLE, timestamps: false })
  Tag.init(TagSchema, { sequelize, tableName: TAG_TABLE, timestamps: false })
  NoteTag.init(NoteTagSchema, { sequelize, tableName: NOTE_TAG_TABLE, timestamps: false })

  Note.associate(sequelize.models)
  Image.associate(sequelize.models)
}

module.exports = setupModels
