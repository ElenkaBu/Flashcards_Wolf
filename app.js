require('dotenv').config();
require('@babel/register');

const express = require('express');

const mainRouter = require('./routers/render/mainRoute');
const loginRouter = require('./routers/render/loginRouter');
const loginApiRouter = require('./routers/api/logRouter');
const registrationRouter = require('./routers/render/registrationRouter');
const registrationApiRouter = require('./routers/api/regRouter');
const personalArea = require('./routers/render/personalAreaRoute');
const configApp = require('./config/serverConfig');
const topic = require('./routers/render/topic');
const answer = require('./routers/api/answerRoute');

const app = express();
const PORT = process.env.PORT || 3000;

configApp(app);

app.use('/', mainRouter);
app.use('/registration', registrationRouter);
app.use('/personalArea', personalArea);
app.use('/api', registrationApiRouter);
app.use('/login', loginRouter);
app.use('/api', loginApiRouter);
app.use('/topic', topic);
app.use('/topic', answer);

app.listen(PORT, () => console.log(`Сервер запущен, порт: ${PORT}`));
