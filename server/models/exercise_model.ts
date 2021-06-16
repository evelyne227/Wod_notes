import { connect } from '../connections/wod_notes_db';

export class Exercise
{
    id: number;
    name: string;
    description: string; 
    image_link: string;
    video_link: string;
    sub_category_id: number;
    unit_id: number;

    constructor(data: any)
    {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.image_link = data.image_link;
        this.video_link = data.video_link;
        this.sub_category_id = data.sub_category_id;
        this.unit_id = data.unit_id;
    }
}

export class ExerciseModel
{
    // constructor()
    // {

    // }

    public static async getAll()
    {
        return connect().then((conn) => 
        {
            return conn.query('SELECT * from Exercise').then((results) =>
            {
                return results;
            });
        });
    };

    public static async getOneByID(id: any)
    {
        return connect().then((conn) => 
        {
            return conn.query('SELECT name, video_link FROM Exercise WHERE id=?', id).then((results) =>
            {
                return results;
            });
        });
    }

    public static async getNameDescByID(id: any)
    {
        return connect().then((conn) => 
        {
            return conn.query('SELECT name, description FROM Exercise WHERE id=?', id).then((results) =>
            {
                return results;
            });
        });
    }

    public static async getAllBySubCat(sub_category_id: any)
    {
        return connect().then((conn) => 
        {
            return conn.query('SELECT * FROM Exercise WHERE sub_category_id=?', sub_category_id).then((results) =>
            {
                return results;
            });
        });
    }
}