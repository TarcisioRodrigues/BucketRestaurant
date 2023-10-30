import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Food from "../models/Food";
import { v4 as uuidv4 } from "uuid";
class FoodContoller {
  async store(request: Request, response: Response) {
    const repository = getRepository(Food);
    const { name, image, description, price } = request.body;
    const uuid = uuidv4();
    const food = await repository.create({
      id: uuid,
      name,
      image,
      description,
      price,
    });
    await repository.save(food);

    return response.json(food);
  }
  async index(request: Request, response: Response) {
    const repository = getRepository(Food);
    const data = await repository.find();

    return response.json(data);
  }
  async search(request: Request, response: Response) {
    const name = request.params.name;
    const repository = getRepository(Food);
    const data = await repository.findOne({ name });

    return response.json(data);
  }
}

export default new FoodContoller();
