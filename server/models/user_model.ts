import { connect } from '../connections/wod_notes_db';
import { UserRouter } from '../routers/user_router';

export class User
{
    id: number;
    user_name: string;
    last_name: string; 
    first_name: string;
    birth_date: Date;
    gender: string;
    password: string;
    email: string; 

    constructor(data: any)
    {
        this.id = data.id;
        this.user_name = data.user_name;
        this.last_name = data.last_name;
        this.first_name = data.first_name;
        this.birth_date = data.birth_date;
        this.gender = data.gender;
        this.password = data.password;
        this.email = data.email;
    }
}

export class UserModel
{
    // constructor()
    // {

    // }

    public static async getAllUsers()
    {
        return connect().then((conn) => 
        {
            // return conn.query('SELECT Person.user_name AS "Nom d\'utilisateur", Person.last_name AS "Nom", Person.first_name AS "Prénom", Person.birth_date AS "Date de naissance", Person.email AS "Email"').then((results) =>
            // return conn.query('SELECT * FROM Person').then((results) =>
            return conn.query('SELECT user_name, last_name, first_name, birth_date, email FROM Person').then((results) =>
            {
                return results;
            });
        });
    };

    public static async insertUser(user: User)
    {
        return connect().then((conn) => 
        {
            return conn.query('INSERT INTO Person(user_name, last_name, first_name, birth_date, password, email) VALUES(?, ?, ?, ?, ?, ?)', 
            [user.user_name, user.last_name, user.first_name, user.birth_date, user.password, user.email]).then((results) => 
            {
                return this.getAllUsers();
            });
        });
    }

    // public static async deleteWodPersoByID(id: any)
    // {
    //     return connect().then((conn) => 
    //     {
    //         return conn.query('DELETE FROM Wod_perso WHERE id=?', id).then((results) => 
    //         {
    //             return this.getAllWodPerso();
    //         });
    //     });
    // }

    public static async updateUserByID(id: any, user: User)
    {
        return connect().then((conn) => 
        {
            return conn.query('UPDATE Person SET user_name=?, last_name=?, first_name=?, birth_date=?, email=? WHERE id=?', 
            [user.user_name, user.last_name, user.first_name, user.birth_date, user.email, id]).then((results) => 
            {
                return this.getAllUsers();
            });
        });
    }

    public static async updatePasswordByID(id: any, user: User)
    {
        return connect().then((conn) => 
        {
            return conn.query('UPDATE Person SET password=? WHERE id=?', 
            [user.password, id]).then((results) => 
            {
                return this.getAllUsers();
            });
        });
    }



}