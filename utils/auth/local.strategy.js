const { Strategy } = require('passport-local')
const bcrypt = require('bcrypt')
const sequelize = require('../../libs/sequelize')
const boom = require('@hapi/boom')

const options = { usernameField: 'email' }

module.exports = new Strategy(options, async (email, password, done) => {
  const user = await sequelize.models.User.findOne({ where: { email } })

  if (!user) throw boom.unauthorized()

  const valid = await bcrypt.compare(password, user.dataValues.password)
  if (valid) done(null, user)
  else done(boom.unauthorized())
})
