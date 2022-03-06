const { Model, DataTypes } = require('sequelize')

const USER_TABLE = 'users'

const UserSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  picture: {
    type: DataTypes.STRING,
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}

class User extends Model {
  static associate (models) {
    this.hasMany(models.Note, { as: 'notes' })
  }
}

module.exports = { USER_TABLE, UserSchema, User }
