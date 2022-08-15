'use strict';

const bcrypt = require('bcrypt');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          role_id: 1,
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
          name: 'Bennison Devadoss',
          email: 'bennison@yavar.in',
          encrypted_password: bcrypt.hashSync('12345678', 10)
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
