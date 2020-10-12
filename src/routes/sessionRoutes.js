import { Router } from 'express';
import sessionController from '../app/controllers/sessionController';

const routes = Router();

routes.post('/', sessionController.store);

export default routes;
