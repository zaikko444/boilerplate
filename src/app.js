import express from 'express';
import homeRoutes from './routes/homeRoutes';

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
    this.server.use(homeRoutes);
  }
}

export default new App().server;
