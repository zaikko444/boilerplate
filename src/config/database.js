module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: '5432',
  username: 'postgres',
  password: 'docker',
  database: 'api_alunos',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
};
