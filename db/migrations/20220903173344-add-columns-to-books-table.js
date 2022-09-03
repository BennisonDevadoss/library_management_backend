'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('books', 'category_id', {
      type: Sequelize.BIGINT,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id'
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('books', 'category_id');
  }
};
