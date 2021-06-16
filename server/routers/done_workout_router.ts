import { Router } from 'express';
import { DoneWorkoutController } from '../controllers/done_workout_controller';

export class DoneWorkoutRouter
{
    public router: Router;
    private done_workout_controller: DoneWorkoutController;

    constructor()
    {
        this.router = Router(); 
        this.done_workout_controller = new DoneWorkoutController();
        
        // Done workouts list
        this.router.get('/all/', this.done_workout_controller.getAllDoneWorkouts);
        // PR's page
        this.router.get('/list/', this.done_workout_controller.getDoneWorkoutsInfos);
        // progress page
        this.router.get('/list/:id', this.done_workout_controller.getDoneWorkoutsProgressByID);
        // new PR page
        this.router.post('/newPR/', this.done_workout_controller.insertPR);
    }
}