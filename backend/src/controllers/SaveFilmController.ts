import {Request,Response} from 'express'
import {getRepository} from 'typeorm'
import Film from '../models/Film'

class SaveFilmController{
    async index(request:Request ,response:Response){
        return response.send('ok')
    }
async store(request:Request ,response:Response){
const repository=getRepository(Film);
const {film,user_id,}=request.body;

const films=await repository.create({film,user_id})
await repository.save(films)

return response.json(films)
}


}

export default new SaveFilmController ()