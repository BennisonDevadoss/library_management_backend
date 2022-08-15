'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('users', {
        id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        email: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        created_by: {
          type: Sequelize.BIGINT,
          allowNull: false
        },
        updated_by: {
          type: Sequelize.BIGINT,
          allowNull: true
        },
        encrypted_password: {
          type: Sequelize.TEXT,
          allowNull: true
        },
        access_token: {
          type: Sequelize.TEXT
        },
        sign_in_count: {
          type: Sequelize.INTEGER,
          defaultValue: 0
        },
        last_sign_in_ip: {
          type: Sequelize.STRING(50),
          allowNull: true
        },
        current_sign_in_ip: {
          type: Sequelize.STRING(50),
          allowNull: true
        },
        current_sign_in_at: {
          type: Sequelize.DATE,
          allowNull: true
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        deleted_at: {
          type: Sequelize.DATE,
          allowNull: true
        }
      })
      .then(() => {
        queryInterface.addIndex('users', ['name', 'email']);
      });
  },
  down: (queryInterface, Sequelize) => queryInterface.dropTable('users')
};
