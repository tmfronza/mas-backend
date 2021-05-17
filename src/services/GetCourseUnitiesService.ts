import { getRepository } from "typeorm";
import { CourseUnity } from "../models/CourseUnity";

interface UserId {
    id?: string;
}

class GetCourseUnitiesService {
    public async execute({id}: UserId){
        const courseUnityRepository = getRepository(CourseUnity);

        const courseUnities = courseUnityRepository.find();

        if(!courseUnities){
            return {
                message: 'courses unities not found'
            }
        }

        return courseUnities;

    }
}

export {GetCourseUnitiesService}