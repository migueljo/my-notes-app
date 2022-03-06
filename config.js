require('dotenv').config()

module.exports = {
  dbUrl: process.env.DB_URL,
  jwtSecret: process.env.JWT_SECRET
}
