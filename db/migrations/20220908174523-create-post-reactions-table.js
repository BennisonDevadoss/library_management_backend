'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('post_reactions', {
      id: {
        type: Sequelize.BIGINT,
        autoIncremement: true,
        primaryKey: true,
        allowNull: false
      },
      reaction: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: ['like', 'love', 'haha', 'wow', 'sad', 'angry']
      },
      book_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'books',
          key: 'id'
        }
      },
      user_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      reaction_change_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      previous_reaction: {
        type: Sequelize.STRING(5)
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('post_reactions');
  }
};
/* USING HARD DELETE */