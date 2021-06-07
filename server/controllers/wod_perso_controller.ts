import { Router, Request, Response, NextFunction } from 'express'; 
import { WodPerso, WodPersoModel } from '../models/wod_perso_model'; 

export class WodPersoController
{
    private wod_perso_model = new WodPersoModel();

    // constructor()
    // {

    // }

    public async getAllWodPerso(req: Request, res: Response, next: NextFunction)
    {
        // console.log('test');
        // res.json({nom: "Evelyne"});
        const results = await WodPersoModel.getAllWodPerso();
        res.json(results);
    }

    public async insertWodPerso(req: Request, res: Response, next: NextFunction)
    {
        try
        {
            // console.log('test');
            // res.json({nom: "Evelyne"});
            const wodPerso = new WodPerso(req.body);
            const results = await WodPersoModel.insertWodPerso(wodPerso);
            res.json(results);
        }
        catch(err)
        {
            res.status(500).send(err);
        }
    }

    public async deleteWodPersoByID(req: Request, res: Response, next: NextFunction)
    {
        try
        {
            const results = await WodPersoModel.deleteWodPersoByID(req.params.id);
            res.json(results);
        } catch(err)
        {
            res.status(500).send(err);
        }
    }

    public async updateWodPersoByID(req: Request, res: Response, next: NextFunction)
    {
        try
        {
            const wodPerso = new WodPerso(req.body);
            const results = await WodPersoModel.updateWodPersoByID(req.params.id, wodPerso);
            res.json(results);
        } catch(err)
        {
            res.status(500).send(err);
        }
    }


}