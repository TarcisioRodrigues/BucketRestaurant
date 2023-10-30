import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";
import { v4 as uuidv4 } from "uuid";
class UserController {
  async index(request: Request, response: Response) {
    const repository = getRepository(User);
    const data = await repository.find();

    return response.json(data);
  }
  async FindEmail(request: Request, response: Response) {
    const { email } = request.params;
    const repository = getRepository(User);
    const data = await repository.findOne({ email });

    if (!data) {
      return console.log("NAda");
    } else {
      return response.json(data);
    }
  }
  async store(request: Request, response: Response) {
    const uuid = uuidv4();
    const repository = getRepository(User);
    const { name, email, password } = request.body;
    const userExists = await repository.findOne({ where: { email } });

    if (userExists) {
      return response.sendStatus(409);
    }

    const user = await repository.create({ id: uuid, name, email, password });
    await repository.save(user);

    return response.json(user);
  }
}

export default new UserController();
