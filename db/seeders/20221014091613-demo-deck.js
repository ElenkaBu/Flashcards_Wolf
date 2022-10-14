'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Decks', [{
        title: 'Very difficult questions',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      title: 'Stupied questions',
      createdAt: new Date(),
      updatedAt: new Date(),
  }], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
