import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Food from "../models/Food";
class FoodContoller {
  async store(request: Request, response: Response) {
    const repository = getRepository(Food);
    const { name, image, description, price } = request.body;

    const food = await repository.create({
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
