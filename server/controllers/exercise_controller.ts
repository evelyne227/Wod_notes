import { Router, Request, Response, NextFunction } from 'express'; 
import { Exercise, ExerciseModel } from '../models/exercise_model'; 

export class ExerciseController
{
    private exercise_model = new ExerciseModel();

    constructor()
    {

    }

    public async getAll(req: Request, res: Response, next: NextFunction)
    {
        // console.log('test');
        // res.json({nom: "Evelyne"});
        const results = await ExerciseModel.getAll();
        res.json(results);

    }
}