'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'reactions',
      [
        {
          name: 'Like',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Love',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Haha',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Wow',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Sad',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Angry',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Dislike',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reactions', null, {});
  }
};
