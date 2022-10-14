const router = require('express').Router();
const Main = require('../../src/views/Main');

router.get('/', (req, res) => {
  const { user } = res.locals;
  console.log(user);
  res.renderComponent(Main, { title: 'HR Helper', user });
});

module.exports = router;
