const { Router } = require('express')
const validatorHandler = require('../middleware/validator-handler.middleware')
const { loginUserSchema } = require('../schemas/auth.schema')

const router = Router()

router.post(
  '/login',
  validatorHandler(loginUserSchema, 'body'),
  async (req, res) => {
    res.json(req.body)
  }
)

module.exports = router
