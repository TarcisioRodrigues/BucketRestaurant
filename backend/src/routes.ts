import { Router } from "express";
import AuthenticateController from "./controllers/AuthenticateController";
import UserControllers from "./controllers/UserControllers";

import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";
import FoodContoller from "./controllers/FoodController";
import PurchaseController from "./controllers/PurchaseController";
const routes = Router();

routes.post("/users", UserControllers.store);
routes.get("/users/:name", UserControllers.FindEmail);
routes.post("/food", FoodContoller.store);

routes.get("/listfood", FoodContoller.index);
routes.get("/listfood/:name", FoodContoller.search);
routes.post("/purchase", PurchaseController.store);
routes.get("/listpurchase", PurchaseController.index);
routes.post("/auth", AuthenticateController.store);
routes.get("/listagem", UserControllers.index);
routes.get("/list", ensureAuthenticate, UserControllers.index);

export { routes };
