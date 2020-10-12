import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Professor extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome so pode ter entre 3 a 255 caracteres',
          },
          notNull: { msg: 'Preencha o campo nome' },
          notEmpty: { msg: 'Preencha o campo nome' },
        },
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: { msg: 'Email ja existe' },
        validate: {
          len: {
            args: [1, 255],
            msg: 'Email so pode ter entre 1 a 255 caracteres',
          },
          notNull: { msg: 'Preencha o campo email' },
          notEmpty: { msg: 'Preencha o campo email' },
          isEmail: { msg: 'Email invalido' },
        },
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [3, 400],
            msg: 'O campo descrição so pode ter entre 3 a 400 caracteres',
          },
          notNull: { msg: 'Preencha o campo Descrição' },
          notEmpty: { msg: 'Preencha o campo Descrição' },
        },
      },
      password: {
        type: Sequelize.VIRTUAL,
        allowNull: false,
        validate: {
          notEmpty: { msg: 'O campo senha precisa ser preenchido' },
          notNull: { msg: 'O campo senha precisa ser preenchido' },
          len: {
            args: [6, 60],
            msg: 'A senha precisa ter entre 6 a 50 caracteres ',
          },
        },

      },
      password_hash: Sequelize.STRING,

    },

    {
      sequelize,
    });
    this.addHook('beforeSave', (user) => {
      if (user.password) {
        user.password_hash = bcrypt.hashSync(user.password, 8);
      }
    });
  }
}

export default Professor;
