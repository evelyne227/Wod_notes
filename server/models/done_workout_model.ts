import { connect } from '../connections/wod_notes_db';
import { DoneWorkoutRouter } from '../routers/done_workout_router';

export class DoneWorkout
{
    id: number;
    date: Date;
    result: number; 
    comment: string;
    exercise_id: string;
    wod_perso: number;
    user_id: number;

    constructor(data: any)
    {
        this.id = data.id;
        this.date = data.date;
        this.result = data.result;
        this.comment = data.comment;
        this.exercise_id = data.exercise_id;
        this.wod_perso = data.wod_perso;
        this.user_id = data.user_id;
    }
}

export class DoneWorkoutModel
{
    // constructor()
    // {

    // }

    public static async getAllDoneWorkouts()
    {
        return connect().then((conn) => 
        {
            return conn.query('SELECT * from Done_workout').then((results) =>
            {
                return results;
            });
        });
    };

    public static async getDoneWorkoutsInfos()
    {
        return connect().then((conn) => 
        {
            return conn.query('SELECT Done_workout.date AS "Date", Category.name AS "Catégorie", Sub_category.name AS "Sous-Catégorie", Exercise.name AS "Exercice", Done_workout.result AS "Résultat" FROM Done_workout LEFT JOIN Exercise ON Exercise.id = Done_workout.exercise_id LEFT JOIN Sub_category ON Sub_category.id = Exercise.sub_category_id LEFT JOIN Category ON Sub_category.category_id = Category.id').then((results) =>
            {
                return results;
            });
        });
    };

    public static async getDoneWorkoutsProgressByID(id: any)
    {
        return connect().then((conn) => 
        {
            return conn.query('SELECT Done_workout.date AS "Date", Done_workout.result AS "Résultat" FROM Done_workout WHERE exercise_id=?',id).then((results) =>
            {
                return results;
            });
        });
    };

    public static async insertPR(doneWorkout: DoneWorkout)
    {
        return connect().then((conn) => 
        {
            return conn.query('INSERT INTO Done_workout (date, result, comment, exercise_id, wod_perso, user_id) VALUES(?, ?, ?, ?, ?, ?)', 
            [doneWorkout.date, doneWorkout.result, doneWorkout.comment, doneWorkout.exercise_id, doneWorkout.wod_perso, doneWorkout.user_id]).then((results) => 
            {
                return this.getDoneWorkoutsInfos();
            });
        });
    }

}