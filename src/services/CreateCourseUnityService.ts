import {getRepository} from 'typeorm';
import {CourseUnity} from '../models/CourseUnity';

interface CourseUnityData{
    name: string;
    description: string;
}

class CreateCourseUnityService {

    async execute({name, description}: CourseUnity){

        const courseUnityRepository = getRepository(CourseUnity);

        const courseUnity = courseUnityRepository.create ({
            name,
            description
        })

        await courseUnityRepository.save(courseUnity);

        return courseUnity;
    }
}

export {CreateCourseUnityService}