import {Request, Response} from 'express';
import { CreateCourseUnityService } from '../services/CreateCourseUnityService';
import { GetCourseUnitiesService } from '../services/GetCourseUnitiesService';

class CourseUnityController{
    
    async create(request: Request, response: Response){
        const courseUnityData = request.body;

        const createCourseUnity = new CreateCourseUnityService();

        const courseUnity = await createCourseUnity.execute(courseUnityData);

        return response.json(courseUnity);
    }
    
    async show(request: Request, response: Response){
        const userId = request.body.user;

        const getCourseUnities = new GetCourseUnitiesService();

        const courseUnities = await getCourseUnities.execute(userId);

        return response.json(courseUnities);
    }
}

export {CourseUnityController}