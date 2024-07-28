import express, { Router } from 'express';
import signUpRouter from './signup';
import loginRouter from './login';
import ForgotPasswordRouter from './forgotPassword';
import ResetPasswordRouter from './resetpassword';
import TourPackageRouter from './tourPackageRouter';
import TourCategoryRouter from './tourCategoryRouter';
import TourLocationRouter from './tourLocationRouter';


const rootRouter: Router = Router();

rootRouter.use('/v1',signUpRouter)
rootRouter.use('/v1',loginRouter)
rootRouter.use('/v1',ForgotPasswordRouter)
rootRouter.use('/v1',ResetPasswordRouter)
rootRouter.use('/v1', TourPackageRouter)
rootRouter.use('/v1', TourCategoryRouter)
rootRouter.use('/v1', TourLocationRouter)



export default rootRouter;