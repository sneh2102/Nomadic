import { Request,Response } from "express";
import { prismaClient } from "../server";
import {compareSync, hashSync} from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../secret";




export const login = async(req:Request, res:Response) => {
    try {
        const {email,password} = req.body;
        console.log(email,password)
        let user = await prismaClient.user.findFirst({where: { email }})
        if(!user){
             throw Error('User does not exist! Please register your account')
        }
        
        if(!compareSync(password,user.password)){
            throw Error('Incorrect Password.')
        }
        const token = jwt.sign({
            userId: user.id
        },JWT_SECRET)
        const { password: _, ...userDetails } = user;
        res.json({userDetails,token});
        
    } catch (error: unknown) {
        if(error instanceof Error){
            res.status(500).json({"error": error.message})
        }
        else{
            console.log(error)
            res.status(500).json({"error": "An unknown error occurred."})
        }
        
    }

}