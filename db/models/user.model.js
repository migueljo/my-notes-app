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
  }
}

class User extends Model {
  static associate (models) {
    this.hasMany(models.Note, { as: 'notes' })
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User'
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User }
