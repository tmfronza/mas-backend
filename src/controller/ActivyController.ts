import {Request, Response} from 'express';
import {CreateActivyService} from '../services/CreateActivyService';

class ActivyController{

    async create(request: Request, response: Response){
        
        const activyData = request.body;

        const createActivyData = new CreateActivyService();

        const activy = await createActivyData.execute(activyData);

        return response.json(activy)
    }
}

export {ActivyController}