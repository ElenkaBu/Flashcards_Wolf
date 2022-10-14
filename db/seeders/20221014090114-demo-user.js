'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Users', [{
        name: 'polechkapo',
        password: '1234567',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      name: 'VasiliiIvanovich',
      password: '1234',
      createdAt: new Date(),
      updatedAt: new Date(),
  }], {})
  },

};
