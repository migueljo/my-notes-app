const { DataTypes, Model } = require('sequelize')
const { NOTE_TABLE } = require('./note.model')
const { TAG_TABLE } = require('./tag.model')

const NOTE_TAG_TABLE = 'notes_tags'

const NoteTagSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  noteId: {
    type: DataTypes.INTEGER,
    field: 'note_id',
    references: {
      model: NOTE_TABLE,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  tagId: {
    type: DataTypes.INTEGER,
    field: 'tag_id',
    references: {
      model: TAG_TABLE,
      key: 'id'
    },
    onDelete: 'CASCADE'
  }
}

class NoteTag extends Model {
  static associate (models) {}

  static config (sequelize) {
    return {
      sequelize,
      tableName: NoteTagSchema,
      modelName: 'NoteTag'
    }
  }
}

module.exports = { NOTE_TAG_TABLE, NoteTagSchema, NoteTag }
