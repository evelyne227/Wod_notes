import express, { Router } from 'express';
import { ExerciseRouter } from './routers/exercise_router';
import { DoneWorkoutRouter } from './routers/done_workout_router';
import { WodPersoRouter } from './routers/wod_perso_router';
import { UserRouter } from './routers/user_router';
import cors from 'cors';

export class Server
{
    private app: express.Application;
    
    constructor()
    {
        //create app
        this.app = express();
        this.app.use(cors());
        // bodyparser
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        //routes initialization 
        this.init_routes();
    }

    private init_routes()
    {
        this.app.use('/api/benchmarks', new ExerciseRouter().router);
        this.app.use('/api/prs', new DoneWorkoutRouter().router);
        this.app.use('/api/mes-wods', new WodPersoRouter().router);
        this.app.use('/api/users', new UserRouter().router);
    }

    public start()
    {
        //console.log('test');
        this.app.listen(8000);
    }
}