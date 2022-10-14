const router = require('express').Router();
const Main = require('../../src/views/Main');

router.get('/', (req, res) => {
  const { user } = res.locals;
  res.renderComponent(Main, { title: 'HR Helper', user });
});

module.exports = router;

router.post('/', (req, res) => {
  const { user } = res.locals;
  if (!user) {
    return res.status(404).json({ status: 'error', message: 'Пожалуйста зарегистрируйтесь !' });
  }
});