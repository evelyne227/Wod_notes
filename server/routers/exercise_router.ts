import { Router } from 'express';
import { ExerciseController } from '../controllers/exercise_controller';

export class ExerciseRouter
{
    public router: Router;
    private exercise_controller: ExerciseController;

    constructor()
    {
        this.router = Router(); 
        this.exercise_controller = new ExerciseController();

        this.router.get('/', this.exercise_controller.getAll);
    }
}