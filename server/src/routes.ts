import express from 'express'

import UserController from './controllers/userController'

const routes = express.Router()
routes.use(express.json())
const userController = new UserController()

routes.get('/users', userController.index)
routes.get('/users/:id', userController.show)
routes.post('/users', userController.create)


export default routes