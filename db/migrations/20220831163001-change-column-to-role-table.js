'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('roles', 'role', 'name', {
      type: Sequelize.STRING(50),
      allowNull: false
    });
  },

  async down(queryInterface, Sequelize) {
    Promise.all();
  }
};
