import { Router, Request, Response, NextFunction } from 'express'; 
import { User, UserModel } from '../models/user_model'; 

export class UserController
{
    private user_model = new UserModel();

    // constructor()
    // {

    // }

    public async getAllUsers(req: Request, res: Response, next: NextFunction)
    {
        // console.log('test');
        // res.json({nom: "Evelyne"});
        const results = await UserModel.getAllUsers();
        res.json(results);
    }

    public async insertUser(req: Request, res: Response, next: NextFunction)
    {
        try
        {
            // console.log('test');
            // res.json({nom: "Evelyne"});
            const user = new User(req.body);
            const results = await UserModel.insertUser(user);
            res.json(results);
        }
        catch(err)
        {
            res.status(500).send(err);
        }
    }

    // public async deleteWodPersoByID(req: Request, res: Response, next: NextFunction)
    // {
    //     try
    //     {
    //         const results = await WodPersoModel.deleteWodPersoByID(req.params.id);
    //         res.json(results);
    //     } catch(err)
    //     {
    //         res.status(500).send(err);
    //     }
    // }

    public async updateUserByID(req: Request, res: Response, next: NextFunction)
    {
        try
        {
            const user = new User(req.body);
            const results = await UserModel.updateUserByID(req.params.id, user);
            res.json(results);
        } catch(err)
        {
            res.status(500).send(err);
        }
    }

    public async updatePasswordByID(req: Request, res: Response, next: NextFunction)
    {
        try
        {
            const user = new User(req.body);
            const results = await UserModel.updatePasswordByID(req.params.id, user);
            res.json(results);
        } catch(err)
        {
            res.status(500).send(err);
        }
    }


}