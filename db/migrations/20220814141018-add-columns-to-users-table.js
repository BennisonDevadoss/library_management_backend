'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'role_id', {
      type: Sequelize.BIGINT,
      allowNull: false,
      references: {
        model: 'roles',
        key: 'id'
      }
    });
    await queryInterface.addColumn('users', 'last_sign_in_at', {
      type: Sequelize.DATE,
      allowNull: true
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'role_id');
  }
};
