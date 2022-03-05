const { Sequelize } = require('sequelize')

const config = require('../config')
const setupModels = require('../db/setupModels')

const sequelize = new Sequelize(config.dbUrl, {
  logging: true,
  dialect: 'postgres'
})

setupModels(sequelize)

sequelize.sync({ force: true }).catch(console.error)

module.exports = sequelize
