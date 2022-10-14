'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [{
      deckID: '1',
      question: "Какое из перечисленных ниже слов не является зарезервированным словом в JavaScript? (default; throw;  finally; undefined) ",
      answer: "undefined",
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
    deckID: '1',
    question: "Внутри какого HTML элемента помещается JavaScript?",
    answer: "script",
    createdAt: new Date(),
    updatedAt: new Date(),
},
{
  deckID: '1',
  question: "В React все является?(элементом, компонентом, классом, хуком, методом)",
  answer: "компонентом",
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  deckID: '1',
  question: "useLayoutEffect запускается после рендера React-компонента и гарантирует, что обратный вызов эффекта не заблокирует отрисовку.",
  answer: "Неверно. (Это делает хук useEffect.)",
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  deckID: '1',
  question: "Чему равно а? (let a = (2,5 + 0,5)*2 ",
  answer: "10",
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  deckID: '2',
  question: "День Октябрьской революции отмечают в октябре?",
  answer: "Ложь",
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
deckID: '2',
question: "У богомолов единственное ухо находится между ног?",
answer: "Правда",
createdAt: new Date(),
updatedAt: new Date(),
},
{
deckID: '2',
question: "Писатель Марк Твен изобрел и запатентовал застежку для бюстгальтера",
answer: "Правда",
createdAt: new Date(),
updatedAt: new Date(),
},
{
deckID: '2',
question: "Владелец компании, которая делает сегвеи, умер из-за того, что упал с обрыва на сегвее.",
answer: "Правда",
createdAt: new Date(),
updatedAt: new Date(),
},
{
deckID: '2',
question: "У людей уникальные отпечатки пальцев, а у кошек — носы. ",
answer: "Правда",
createdAt: new Date(),
updatedAt: new Date(),
},

{
  deckID: '3',
  question: "Единица измерения атмосферного давления?",
  answer: "Паскаль",
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
deckID: '3',
question: "Самая жаркая планета, которая находится ближе всего по отношению к Солнцу?",
answer: "Меркурий",
createdAt: new Date(),
updatedAt: new Date(),
},
{
deckID: '3',
question: "К какому классу принадлежит аксолотль? ",
answer: "Земноводные",
createdAt: new Date(),
updatedAt: new Date(),
},
{
deckID: '3',
question: "Мужской репродуктивный орган цветковых растений, в котором образуется пыльца, называется… ",
answer: "Тычинка",
createdAt: new Date(),
updatedAt: new Date(),
},
{
deckID: '3',
question: "Как называется стиль живописи, который позволяет художнику выразить свое субъективное восприятие действительности?",
answer: "Экспрессионизм",
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
