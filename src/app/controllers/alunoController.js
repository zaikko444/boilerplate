import Aluno from '../model/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'name', 'email'],
    });

    return res.json(alunos);
  }

  async store(req, res) {
    try {
      const { id, name, email } = await Aluno.create(req.body);
      return res.json({ id, name, email });
    } catch (e) {
      return res.json(e.errors.map((error) => error.message));
    }
  }

  async update(req, res) {
    console.log(req.userId);
    try {
      const id = req.userId;
      const aluno = await Aluno.findByPk(id);
      const { name, email } = await aluno.update(req.body);
      return res.json({ id, name, email });
    } catch (e) {
      return res.json(e.errors.map((error) => error.message));
    }
  }

  async delete(req, res) {
    const id = req.userId;
    const alunoDelete = (await Aluno.findByPk(id)).destroy();
    return res.json('Removido');
  }
}

export default new AlunoController();
