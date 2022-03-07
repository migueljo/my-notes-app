const boom = require('@hapi/boom')

const sequelize = require('../libs/sequelize')

async function create (data) {
  const user = await sequelize.models.User.create(data)
  return user
}

async function findOne (userId) {
  const user = await sequelize.models.User.findByPk(userId)
  if (!user) throw boom.unauthorized()

  return user
}

async function findByEmail (email) {
  const user = await sequelize.models.User.findOne({
    where: { email },
    attributes: { exclude: ['password'] }
  })

  if (!user) throw boom.unauthorized()

  return user
}

async function update (userId, data) {
  const user = await findOne(userId)
  const updatedUser = await user.update(data)

  return updatedUser
}

async function remove (userId) {
  const user = await findOne(userId)
  await user.destroy()

  return { id: userId }
}

const userService = {
  create,
  findOne,
  findByEmail,
  update,
  remove
}

module.exports = userService
