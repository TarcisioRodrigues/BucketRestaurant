import {Request,Response} from 'express'
import {getRepository} from 'typeorm'
import  User  from '../models/User'
import bcrypt from 'bcryptjs'
import *as  Jwt  from 'jsonwebtoken'
class AuthenticateController{
    
async store(request:Request ,response:Response){
    const repository=getRepository(User)
    const {email,password}=request.body
    const user=await repository.findOne({where:{email}})


    if(!user){
    return response.sendStatus(401)
    }
    const isValidPassword=await bcrypt.compare(password,user.password)
    if(!isValidPassword){
        return response.sendStatus(401)
    }
    const token=Jwt.sign({id:user.id},'secret',{expiresIn:'1d'})
    
    return response.json({
        user,
        token
    })
}


}

export default new AuthenticateController ()