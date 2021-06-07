import { Router, Request, Response, NextFunction } from 'express'; 
import { DoneWorkout, DoneWorkoutModel } from '../models/done_workout_model'; 

export class DoneWorkoutController
{
    private done_workout_model = new DoneWorkoutModel();

    // constructor()
    // {

    // }

    public async getAllDoneWorkouts(req: Request, res: Response, next: NextFunction)
    {
        // console.log('test');
        // res.json({nom: "Evelyne"});
        const results = await DoneWorkoutModel.getAllDoneWorkouts();
        res.json(results);
    }

    public async getDoneWorkoutsInfos(req: Request, res: Response, next: NextFunction)
    {
        // console.log('test');
        // res.json({nom: "Evelyne"});
        const results = await DoneWorkoutModel.getDoneWorkoutsInfos();
        res.json(results);
    }

    public async insertPR(req: Request, res: Response, next: NextFunction)
    {
        try
        {
            // console.log('test');
            // res.json({nom: "Evelyne"});
            const doneWorkout = new DoneWorkout(req.body);
            const results = await DoneWorkoutModel.insertPR(doneWorkout);
            res.json(results);
        }
        catch(err)
        {
            res.status(500).send(err);
        }
    }
}