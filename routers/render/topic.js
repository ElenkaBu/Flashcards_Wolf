const router = require('express').Router();
const topic = require('../../src/views/Topic');

router.get('/', (req, res) => {
  const { user } = res.locals;
  res.renderComponent(topic, { title: 'Topic', user });
});

module.exports = router;