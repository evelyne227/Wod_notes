import { Router } from 'express';
import { WodPersoController } from '../controllers/wod_perso_controller';

export class WodPersoRouter
{
    public router: Router;
    private wod_perso_controller: WodPersoController;

    constructor()
    {
        this.router = Router(); 
        this.wod_perso_controller = new WodPersoController();
        
        // mes wods page
        this.router.get('/all/', this.wod_perso_controller.getAllWodPerso);
        // new wod perso page
        this.router.post('/new/', this.wod_perso_controller.insertWodPerso);
        // delete wod perso
        this.router.delete('/:id', this.wod_perso_controller.deleteWodPersoByID);
        // update wod perso
        this.router.put('/edit/:id', this.wod_perso_controller.updateWodPersoByID);
    }
}