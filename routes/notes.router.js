const { Router } = require('express')

const notesRouter = Router()

notesRouter.get('/', (req, res) => {
  console.log(req.body)
  res.json([])
})

notesRouter.post('/', (req, res) => {
  console.log(req.body)
  res.json([])
})

module.exports = notesRouter
