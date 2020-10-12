import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import { decode } from 'punycode';
import auth from '../../config/auth';

export default async (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(400).json({ error: 'Por favor passe o token' });
  }
  const [, token] = header.split(' ');
  try {
    const decoded = await promisify(jwt.verify)(token, auth.secret);
    req.userId = decoded.id;
    if (decoded.isProfessor) {
      req.isProfessor = true;
    } else {
      req.isAluno = true;
    }
    return next();
  } catch (e) {
    return res.status(400).json({ error: 'Token incorreto' });
  }
};
