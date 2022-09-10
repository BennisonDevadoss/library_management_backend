'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('post_reactions', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      reaction_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'reactions',
          key: 'id'
        }
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
      previous_reaction_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'reactions',
          key: 'id'
        }
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
