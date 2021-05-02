import {Router, Request, Response, response} from 'express';
import { UserController } from './controller/UserController';
import { CourseUnityController } from './controller/CourseUnityController';
import { ActivyController } from './controller/ActivyController';

interface UserRequest {
    name: string;
    email: string;
    password: string;
}

const userController = new UserController();
const courseUnityController = new CourseUnityController();
const activyController = new ActivyController();

const routes = Router();

routes.post('/user', userController.create);
routes.post('/courseunity', courseUnityController.create);
routes.post('/activy', activyController.create);

export default routes;