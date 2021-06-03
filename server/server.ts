import express, { Router } from 'express';
import { ExerciseRouter } from './routers/exercise_router';

export class Server
{
    private app: express.Application;
    
    constructor()
    {
        //create app
        this.app = express();
        // bodyparser
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        //routes initialization 
        this.init_routes();
    }

    private init_routes()
    {
        this.app.use('/api/exercises', new ExerciseRouter().router);
    }

    public start()
    {
        //console.log('test');
        this.app.listen(8000);
    }
}