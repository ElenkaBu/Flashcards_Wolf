const router = require('express').Router();
const personalArea = require('../../src/views/personalArea');

router.get('/', (req, res) => {
  const { user } = res.locals;
  res.renderComponent(personalArea, { title: 'Personal area', user });
});

module.exports = router;