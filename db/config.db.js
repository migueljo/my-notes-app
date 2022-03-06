require('dotenv').config()

const dialect = 'postgres'

module.exports = {
  development: {
    url: process.env.DB_URL,
    dialect
  },
  production: {
    url: process.env.DB_URL,
    dialect
  }
}
