
import { IUser } from './models/User'; 
// Extend Express Request interface to include a custom user property
declare global {
  namespace Express {
    interface Request {
      user?: IUser; 
    }
  }
}
console.log("Exiting interface Request.......")
// import { User } from "@prisma/client";
// import * as express from "express"
// declare namespace Express {
//     export interface Request {
//         user: any;
//     }
//     export interface Response {
//         user: any;
//     }
//   }


// import { User } from "@prisma/client";
// import Request from 'express';
// import express from 'express';


// declare module "express" {
//     export interface Request {
//         user : User|null| Record<string,any> | undefined
//         // User | null | undefined | 
//     }

// }