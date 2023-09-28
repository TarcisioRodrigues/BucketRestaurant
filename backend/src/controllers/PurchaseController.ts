import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Purchase } from "../models/Purchase";
class PurchaseContoller {
  async store(request: Request, response: Response) {
    const repository = getRepository(Purchase);
    const { user_id, food_id } = request.body;

    const purchase = await repository.create({
      user: { id: user_id },
      food: { id: food_id },
    });
    await repository.save(purchase);

    return response.json(purchase);
  }
  async index(request: Request, response: Response) {
    const repository = getRepository(Purchase);
    const data = await repository.find();

    return response.json(data);
  }
}

export default new PurchaseContoller();
