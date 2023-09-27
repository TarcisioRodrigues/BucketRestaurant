import { Router } from "express";
import AuthenticateController from "./controllers/AuthenticateController";
import SaveFilmController from "./controllers/SaveFilmController";
import UserControllers from "./controllers/UserControllers";

import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";
const routes=Router()


routes.post('/users',UserControllers.store)
routes.post('/auth',AuthenticateController.store)
routes.get('/list',ensureAuthenticate,UserControllers.index)
routes.post('/save_film',ensureAuthenticate,SaveFilmController.store)





export {routes}