const { DataTypes, Model } = require('sequelize')
const { USER_TABLE } = require('./user.model')

const NOTE_TABLE = 'notes'

const NoteSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id',
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  }
}

class Note extends Model {
  static associate (models) {
    this.belongsTo(models.User, { as: 'user' })
    this.belongsToMany(models.Tag, { through: 'notes_tags', as: 'tags' })
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: NOTE_TABLE,
      modelName: 'Note'
    }
  }
}

module.exports = { NOTE_TABLE, Note, NoteSchema }
