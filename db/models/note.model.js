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
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}

class Note extends Model {
  static associate (models) {
    this.belongsTo(models.User, { as: 'user' })
    this.belongsToMany(models.Tag, { through: 'notes_tags', as: 'tags' })
  }
}

module.exports = { NOTE_TABLE, Note, NoteSchema }
