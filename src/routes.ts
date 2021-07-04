import { Router } from "express";
import AuthenticateUserController from "./controllers/AuthenticateUserController";
import CreateUserController from "./controllers/CreateUserController"
import CreateTagController from "./controllers/CreateTagController"
import CreateComplimentController from "./controllers/CreateComplimentController"

import ensureAdmin from "./middlewares/ensureAdmin";
import ensureAuthenticated from "./middlewares/ensureAuthenticated";

const routes = Router()
const authenticateUserController = new AuthenticateUserController()
const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const createComplimentController = new CreateComplimentController()

routes
    .post('/users', ensureAuthenticated, createUserController.create)
    .post('/login', authenticateUserController.handle)
    .post('/tags', ensureAuthenticated, ensureAdmin, createTagController.create)
    .post('/compliments', ensureAuthenticated, createComplimentController.handle)

export { routes }