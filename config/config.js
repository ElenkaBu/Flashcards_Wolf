const morgan = require('morgan');

const config = (app) => {
  app.use(morgan('tiny'));
};

module.exports = config;