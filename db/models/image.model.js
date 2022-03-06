const { DataTypes, Model } = require('sequelize')
const { NOTE_TABLE } = require('./note.model')

const IMAGE_TABLE = 'images'

const ImageSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  noteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'note_id',
    references: {
      model: NOTE_TABLE,
      key: 'id'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}

class Image extends Model {
  static associate (models) {
    this.belongsTo(models.Note, { as: 'note' })
  }
}

module.exports = { IMAGE_TABLE, Image, ImageSchema }
