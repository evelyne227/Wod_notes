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
        
        // full exercises list
        this.router.get('/all/', this.exercise_controller.getAll);
        // Movement details page
        this.router.get('/details/:id', this.exercise_controller.getOneByID);
        // Benchmark details page
        this.router.get('/id/:id', this.exercise_controller.getNameDescByID);
        // Benchmark page
        this.router.get('/cat/:sub_category_id', this.exercise_controller.getAllBySubCat);
    }
}