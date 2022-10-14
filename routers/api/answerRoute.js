const router = require('express').Router();
const { Card } = require('../../db/models');

router.post('/:id', async (req, res) => {
  const { answer, id } = req.body;
  console.log(answer, id);
  const card = await Card.findOne({ where: { id } });
  if (answer === card.answer) {
    return res.status(200).json({ status: 'success', message: 'Правильно' });
  }
  return res.status(404).json({ status: 'error', message: 'Неправильно' });
});

module.exports = router;