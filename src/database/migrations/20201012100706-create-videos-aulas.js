module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('video_hall', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      url: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      type_materia: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      professor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'professors',
          key: 'id',
        },
        onDelete: null,
        onUpdate: 'CASCADE',
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('video_hall');
  },
};
