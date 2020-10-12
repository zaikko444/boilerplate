import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Professor from '../app/model/Professor';
import Aluno from '../app/model/Aluno';

const models = [Professor, Aluno];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
