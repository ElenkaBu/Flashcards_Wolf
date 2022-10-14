'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Decks', [{
        title: 'JavaScript',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      title: 'Правда или ложь',
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
    title: 'Школьные вопросы',
    createdAt: new Date(),
    updatedAt: new Date(),
}
], {})
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
