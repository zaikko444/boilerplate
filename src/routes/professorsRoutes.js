import { Router } from 'express';
import ProfessorController from '../app/controllers/professorController';
import loginIsRequired from '../app/middlewares/auth';

const routes = Router();

routes.post('/', ProfessorController.store);
routes.get('/', ProfessorController.index);
routes.get('/:id', ProfessorController.show);

routes.use(loginIsRequired);

routes.put('/', ProfessorController.update);
routes.delete('/', ProfessorController.delete);

export default routes;
