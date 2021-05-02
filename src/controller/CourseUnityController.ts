import {Request, Response} from 'express';
import { CreateCourseUnityService } from '../services/CreateCourseUnityService';

class CourseUnityController{
    
    async create(request: Request, response: Response){
        
        const courseUnityData = request.body;

        const createCourseUnity = new CreateCourseUnityService();

        const courseUnity = await createCourseUnity.execute(courseUnityData);

        return response.json(courseUnity);
    }
}

export {CourseUnityController}