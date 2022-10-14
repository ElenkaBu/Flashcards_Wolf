const router = require('express').Router();
const topic = require('../../src/views/Topic');
const { Card } = require('../../db/models');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { user } = res.locals;
  const quest = await Card.findAll({ where: { deckID: id }, raw: true });
  res.renderComponent(topic, { title: 'Topic', user, quest });
});

// router.get('/2', async (req, res) => {
//   const { user } = res.locals;
//   const quest = await Card.findAll({ where: { deckID: 2 } });
//   console.log(quest);
//   res.renderComponent(topic, { title: 'Topic', user, quest });
// });

// router.get('/3', async (req, res) => {
//   const { user } = res.locals;
//   const quest = await Card.findAll({ where: { deckID: 3 } });
//   res.renderComponent(topic, { title: 'Topic', user, quest });
// });
module.exports = router;
