'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'categories',
      [
        {
          name: 'Action and Adventure',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Classics',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Comic Book or Graphic Novel',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Detective and Mystery',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Fantasy',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Historical Fiction',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Horror',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Literary Fiction',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Romance',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Science',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Short Stories',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Suspense and Thrillers',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: `Women's Fiction`,
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Biographies and Autobiographies',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Cookbooks',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Essays',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'History',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Memoir',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Poetry',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Self-Help',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'True Crime',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Biography',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Health/fitness',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Journal',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Philosophy',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Prayer',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Religion, spirituality, and new age',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Sports and leisure',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Travel',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: `Children's`,
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: `Diary`,
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: `Anthology`,
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: `Art/architecture`,
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: `Autobiography`,
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: `Biography`,
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: `Business/economics`,
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: `Math`,
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: `Review`,
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: `Western`,
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: `Short story`,
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: `Drama`,
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: `Home and garden`,
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: `Dictionary`,
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: `Guide`,
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: `Humor`,
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: `Memoir`,
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: `Political thriller`,
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: `Guide`,
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: `Guide`,
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
