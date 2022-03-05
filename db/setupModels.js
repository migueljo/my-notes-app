const { ImageSchema, Image } = require('./models/image.model')
const { Note, NoteSchema } = require('./models/note.model')
const { Tag, TagSchema } = require('./models/tag.model')
const { User, UserSchema } = require('./models/user.model')

function setupModels (sequelize) {
  User.init(UserSchema, User.config(sequelize))
  Note.init(NoteSchema, Note.config(sequelize))
  Image.init(ImageSchema, Image.config(sequelize))
  Tag.init(TagSchema, Tag.config(sequelize))

  Note.associate(sequelize.models)
  Image.associate(sequelize.models)
}

module.exports = setupModels
