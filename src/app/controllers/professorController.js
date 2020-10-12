import Professor from '../model/Professor';

class ProfessorController {
  async index(req, res) {
    const professors = await Professor.findAll({
      attributes: ['id', 'name', 'email', 'description'],
    });
    return res.json(professors);
  }

  async show(req, res) {
    const { id } = req.params;
    const professors = await Professor.findByPk(id);
    if (!professors) {
      return res.status(400).json({ error: 'Usuário nao existe' });
    }
    const { name, email, description } = professors;

    return res.json({
      id, name, email, description,
    });
  }

  async store(req, res) {
    try {
      const {
        name, email, description, password,
      } = req.body;

      const professor = await Professor.create({
        name,
        email,
        description,
        password,
      });

      return res.json({
        id: professor.id,
        name,
        email,
        description,
      });
    } catch (e) {
      return res.json(e.errors.map((err) => err.message));
    }
  }

  async update(req, res) {
    const id = req.userId;
    try {
      const professor = await Professor.findByPk(id);
      const { name, email } = await professor.update(req.body);
      return res.json({
        id,
        name,
        email,
      });
    } catch (e) {
      return res.status(400).json(e.errors.map((error) => error.message));
    }
  }

  async delete(req, res) {
    const id = req.userId;
    try {
      const professor = await Professor.findByPk(id);
      await professor.destroy();
      return res.json('removido');
    } catch (e) {
      return res.json(e);
    }
  }
}

export default new ProfessorController();
