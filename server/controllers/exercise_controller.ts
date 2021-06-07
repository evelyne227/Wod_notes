import { Router, Request, Response, NextFunction } from 'express'; 
import { Exercise, ExerciseModel } from '../models/exercise_model'; 

export class ExerciseController
{
    private exercise_model = new ExerciseModel();

    // constructor()
    // {

    // }

    public async getAll(req: Request, res: Response, next: NextFunction)
    {
        // console.log('test');
        // res.json({nom: "Evelyne"});
        const results = await ExerciseModel.getAll();
        res.json(results);

    }

    public async getOneByID(req: Request, res: Response, next: NextFunction)
    {
        try
        {
            const results = await ExerciseModel.getOneByID(req.params.id);
            res.json(results);
        } catch(err)
        {
            res.status(500).send(err);
        }
    }

    public async getNameDescByID(req: Request, res: Response, next: NextFunction)
    {
        try
        {
            const results = await ExerciseModel.getNameDescByID(req.params.id);
            res.json(results);
        } catch(err)
        {
            res.status(500).send(err);
        }
    }

    public async getAllBySubCat(req: Request, res: Response, next: NextFunction)
    {
        try
        {
            const results = await ExerciseModel.getAllBySubCat(req.params.sub_category_id);
            res.json(results);
        } catch(err)
        {
            res.status(500).send(err);
        }
    }
}