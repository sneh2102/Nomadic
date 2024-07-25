import express, { Router } from 'express';
import signUpRouter from './signup';
import loginRouter from './login';
import ForgotPasswordRouter from './forgotPassword';
import ResetPasswordRouter from './resetpassword';


const rootRouter: Router = Router();

rootRouter.use('/v1',signUpRouter)
rootRouter.use('/v1',loginRouter)
rootRouter.use('/v1',ForgotPasswordRouter)
rootRouter.use('/v1',ResetPasswordRouter)



export default rootRouter;