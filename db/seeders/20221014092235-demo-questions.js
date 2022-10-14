'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [{
      deckID: '1',
      question: "Какая страна владеет Гренландией?",
      answer: "США",
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
    deckID: '2',
    question: "Какая страна владеет Гренландией?",
    answer: "США",
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
