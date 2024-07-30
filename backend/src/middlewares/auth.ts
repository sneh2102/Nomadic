    // import { NextFunction,Request,Response } from "express";
    // import * as jwt from "jsonwebtoken";
    // import { JWT_SECRET } from '../secret';
    // import { prismaClient } from "../server";

    // const authenticateToken = async(req:Request,res:Response,next:NextFunction) => {
    //     const token = req.headers.authorization
    //     if(!token){
    //         next(res.status(401).json({"message":"Unauthorized"}))
    //     }
    //     try{
    //         const payload = jwt.verify(token as string,`${process.env.JWT_SECRET_KEY}`) as any
    //         const user = await prismaClient.user.findFirst({where: {id: payload.userId}})
    //         if(!user){
    //             next(res.status(401).json({"message":"Unauthorized"}))
    //         }
    //         // jwt.verify(token as string, `${process.env.JWT_SECRET_KEY}` as string, (err, user) => {
    //         //     if (err) return res.sendStatus(403); {
    //         //         req.user = user; 
    //         //         next();
    //         //     }
                
    //         // });
    //          req.user = user;
    //         // next();
    //     }
    //     catch(error){

    //     }
        
    // }

    // export default authenticateToken;
    import { Request, Response, NextFunction } from 'express';
    import jwt from 'jsonwebtoken';
    
    // Defines the structure for AuthRequest, extending Request to include user property.
    export interface AuthRequest extends Request {
      user?: any; 
    }
    console.log("Calling auth.ts working...")
    // Middleware to authenticate token from the Authorization header.
    export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction) => {
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1]; 
    
      if (!token) return res.sendStatus(401);
    
      // Verify token and set user in request on success
      jwt.verify(token, `${process.env.JWT_SECRET_KEY}` as string, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user; 
        next();
      });
     console.log("Authenticate token from auth.ts calling complete....") 
    };

    console.log("Exiting from authenticate token from middleware auth file......")
