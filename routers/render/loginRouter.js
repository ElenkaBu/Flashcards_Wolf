const router = require('express').Router();
const Login = require('../../src/views/Login');

router.get('/', (req, res) => {
  const { user } = res.locals;
  res.renderComponent(Login, { title: 'Login', user });
});

module.exports = router;
