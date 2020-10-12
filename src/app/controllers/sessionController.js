import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import authConfig from '../../config/auth';
import Aluno from '../model/Aluno';
import Professor from '../model/Professor';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const aluno = await Aluno.findOne({
      where: { email },
    });

    const professor = await Professor.findOne({
      where: { email },
    });

    if (!aluno && !professor) {
      return res.json({ error: 'Email ou senha estão incorretos!' });
    }

    if (aluno) {
      const checkPassword = bcrypt.compareSync(password, aluno.password_hash);
      if (!checkPassword) {
        return res.status(400).json({ error: 'Senha incorreta' });
      }
      const { id, name } = await aluno;
      return res.json({
        user: { id, name, email },
        token: jwt.sign({ id, isAluno: true }, authConfig.secret, {
          expiresIn: authConfig.expireIn,
        }),
      });
    }

    if (professor) {
      const checkPassword = bcrypt.compareSync(password, professor.password_hash);
      if (!checkPassword) {
        return res.status(400).json({ error: 'Senha incorreta' });
      }
      const { id, name, description } = await professor;
      return res.json({
        user: {
          id, name, email, description,
        },
        token: jwt.sign({ id, isProfessor: true }, authConfig.secret, {
          expiresIn: authConfig.expireIn,
        }),
      });
    }
  }
}

export default new SessionController();
