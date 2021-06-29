import { Router } from "express";
import CreateUserController from "./controllers/CreateUserController"
import CreateTagController from "./controllers/CreateTagController"

import ensureAdmin from "./middlewares/ensureAdmin";

const routes = Router()
const createUserController = new CreateUserController()
const createTagController = new CreateTagController()

routes
    .post('/users', createUserController.create)
    .post('/tags', ensureAdmin, createTagController.create)

export { routes }