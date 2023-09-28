import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Food from "../models/Food";
class FoodContoller {
  async store(request: Request, response: Response) {
    const repository = getRepository(Food);
    const { name, description, password, price } = request.body;

    const food = await repository.create({
      name,
      description,
      password,
      price,
    });
    await repository.save(food);

    return response.json(food);
  }
  async index(request: Request, response: Response) {}
}

export default new FoodContoller();
