import {Request,Response,NextFunction} from 'express'
import jwt from 'jsonwebtoken'
interface TokenPayLoad{
id:string

}
export function ensureAuthenticate(request:Request,response:Response,Next:NextFunction){
    
    const{authorization}=request.headers
    if(!authorization){
        return response.sendStatus(401)
    }

    const token=authorization.replace('Bearer',' ').trim()

    try {
        const data=jwt.verify(token,'secret');
        console.log(data)
        const{id}=data as TokenPayLoad;

        request.userId=id
        return Next();

    } catch (error) {
        return response.sendStatus(401)
    }

}