// import {Router} from "express";
// import { authenticateToken } from '../middlewares/auth';
// import errorHandler from "../middlewares/errorHandler";

// const meRouter: Router =  Router();

// meRouter.post('/me',authenticateToken,errorHandler)
// console.log("Request reached in me Router...")

// export default meRouter;

import express from 'express';
import { authenticateToken } from '../middlewares/auth';
import { logout } from '../controllers/logout';
import {Router} from "express";
// import errorHandler from "../middlewares/errorHandler";


console.log("Calling me router from routes...")
const meRouter: Router =  Router();
meRouter.post('/me',authenticateToken,logout)
// meRouter.use(errorHandler,logout)
console.log("Exiting me router code...")

export default meRouter;