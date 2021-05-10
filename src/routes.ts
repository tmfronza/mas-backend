import {Router, Request, Response, response} from 'express';
import { UserController } from './controller/UserController';
import { CourseUnityController } from './controller/CourseUnityController';
import { ActivyController } from './controller/ActivyController';
import { AuthenticationController } from './controller/AuthenticateController';
import authenticated from './middlewares/authenticated';

interface UserRequest {
    name: string;
    email: string;
    password: string;
}

const userController = new UserController();
const courseUnityController = new CourseUnityController();
const activyController = new ActivyController();
const authenticationController = new AuthenticationController();

const routes = Router();

routes.post('/user', userController.create);
routes.post('/auth', authenticationController.create);
routes.post('/courseunity', authenticated, courseUnityController.create);
routes.post('/activy', authenticated, activyController.create);

export default routes;