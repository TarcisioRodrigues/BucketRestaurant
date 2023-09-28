import { Router } from "express";
import AuthenticateController from "./controllers/AuthenticateController";
import UserControllers from "./controllers/UserControllers";

import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";
import FoodContoller from "./controllers/FoodController";
const routes = Router();

routes.post("/users", UserControllers.store);
routes.post("/food", FoodContoller.store);
routes.post("/listfood", FoodContoller.index);
routes.post("/auth", AuthenticateController.store);
routes.get("/listagem", UserControllers.index);
routes.get("/list", ensureAuthenticate, UserControllers.index);

export { routes };
