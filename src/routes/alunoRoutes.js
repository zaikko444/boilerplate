import { Router } from 'express';
import AlunoController from '../app/controllers/alunoController';
import loginRequired from '../app/middlewares/auth';

const routes = Router();

routes.post('/', AlunoController.store);
routes.get('/', AlunoController.index);

routes.use(loginRequired);
routes.put('/', AlunoController.update);
routes.delete('/', AlunoController.delete);

export default routes;
