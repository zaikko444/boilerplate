import express from 'express';
import professorsRoutes from './routes/professorsRoutes';
import alunoRoutes from './routes/alunoRoutes';
import sessionRoutes from './routes/sessionRoutes';
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.server.use('/session', sessionRoutes);
    this.server.use('/professor', professorsRoutes);
    this.server.use('/aluno', alunoRoutes);
  }
}

export default new App().server;
