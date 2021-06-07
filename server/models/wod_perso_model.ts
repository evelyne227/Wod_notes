import { connect } from '../connections/wod_notes_db';
import { WodPersoRouter } from '../routers/wod_perso_router';

export class WodPerso
{
    id: number;
    name: string;
    created_at: Date; 
    category_id: number;
    unit_id: number;
    user_id: number;
    description: string;

    constructor(data: any)
    {
        this.id = data.id;
        this.name = data.name;
        this.created_at = data.created_at;
        this.category_id = data.category_id;
        this.unit_id = data.unit_id;
        this.user_id = data.user_id;
        this.description = data.description;
    }
}

export class WodPersoModel
{
    constructor()
    {

    }

    public static async getAllWodPerso()
    {
        return connect().then((conn) => 
        {
            return conn.query('SELECT Wod_perso.name AS "nom", Wod_perso.description AS "description", Unit.name AS "Unité de mesure" from Wod_Perso LEFT JOIN Unit ON Wod_perso.unit_id = Unit.id').then((results) =>
            {
                return results;
            });
        });
    };

    public static async insertWodPerso(wodPerso: WodPerso)
    {
        return connect().then((conn) => 
        {
            return conn.query('INSERT INTO Wod_perso(name, unit_id, user_id, description) VALUES(?, ?, ?, ?)', 
            [wodPerso.name, wodPerso.unit_id, wodPerso.user_id, wodPerso.description]).then((results) => 
            {
                return this.getAllWodPerso();
            });
        });
    }

    public static async deleteWodPersoByID(id: any)
    {
        return connect().then((conn) => 
        {
            return conn.query('DELETE FROM Wod_perso WHERE id=?', id).then((results) => 
            {
                return this.getAllWodPerso();
            });
        });
    }

    public static async updateWodPersoByID(id: any, wodPerso: WodPerso)
    {
        return connect().then((conn) => 
        {
            return conn.query('UPDATE Wod_perso SET name=?, unit_id=?, user_id=?, description=? WHERE id=?', 
            [wodPerso.name, wodPerso.unit_id, wodPerso.user_id, wodPerso.description, id]).then((results) => 
            {
                return this.getAllWodPerso();
            });
        });
    }



}