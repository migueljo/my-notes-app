const { Router } = require('express')
const passport = require('passport')
const validatorHandler = require('../middleware/validator-handler.middleware')
const { getNoteSchema, createNoteSchema, updateNoteSchema } = require('../schemas/note.schema')

const noteService = require('../services/note.service')

const notesRouter = Router()

notesRouter.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const notes = await noteService.find(req.user.sub)
      res.json(notes)
    } catch (error) {
      next(error)
    }
  }
)

notesRouter.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getNoteSchema, 'params'),
  async (req, res, next) => {
    try {
      const noteId = req.params.id
      const userId = req.user.sub
      const note = await noteService.findOne(noteId, userId)

      res.json(note)
    } catch (error) {
      next(error)
    }
  }
)

notesRouter.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(createNoteSchema, 'body'),
  async (req, res, next) => {
    try {
      const note = await noteService.create(req.body)
      res.json(note)
    } catch (error) {
      next(error)
    }
  }
)

notesRouter.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(updateNoteSchema, 'body'),
  async (req, res, next) => {
    try {
      const noteId = req.params.id
      const userId = req.user.sub
      const updatedNote = await noteService.update(noteId, userId, req.body)
      res.json(updatedNote)
    } catch (error) {
      next(error)
    }
  }
)

notesRouter.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getNoteSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const userId = req.user.sub
      await noteService.remove(id, userId)
      res.json(id)
    } catch (error) {
      next(error)
    }
  }
)

module.exports = notesRouter
