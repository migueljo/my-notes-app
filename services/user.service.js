const boom = require('@hapi/boom')

const sequelize = require('../libs/sequelize')

async function create (data) {}

async function find () {}

async function findOne (userId) {}

async function findByEmail (email) {
  const user = await sequelize.models.User.findOne({
    where: { email },
    attributes: { exclude: ['password'] }
  })

  if (!user) throw boom.unauthorized()

  return user
}

async function update (userId, data) {}

async function remove (userId) {}

const userService = {
  create,
  find,
  findOne,
  findByEmail,
  update,
  remove
}

module.exports = userService
