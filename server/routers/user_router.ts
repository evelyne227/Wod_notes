import { Router } from 'express';
import { UserController } from '../controllers/user_controller';

export class UserRouter
{
    public router: Router;
    private user_controller: UserController;

    constructor()
    {
        this.router = Router(); 
        this.user_controller = new UserController();
        
        // get all users
        this.router.get('/all/', this.user_controller.getAllUsers);
        // S'inscrire
        this.router.post('/register/', this.user_controller.insertUser);
        // // delete wod perso
        // this.router.delete('/:id', this.wod_perso_controller.deleteWodPersoByID);
        // update user
        this.router.put('/edit/:id', this.user_controller.updateUserByID);
        // change password
        this.router.put('/reset-password/:id', this.user_controller.updatePasswordByID);

    }
}