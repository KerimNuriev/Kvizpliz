require('@babel/register');
require('dotenv').config();
const express = require('express');
const config = require('./config/serverConfig');

const app = express();

const PORT = process.env.PORT ?? 3000;

config(app);

app.use('/', mainRouter);
app.use('/', logoRegoRouter);
app.use('/', editRouter);
app.use('/', homeRouter);


const mainRouter = require('./routes/render/main.routes');
const songRouter = require('./routes/api/card.routes');
const logoRegoRouter = require('./routes/render/login.routes');
const editRouter = require('./routes/render/edit.routes');
const homeRouter = require('./routes/render/home.routes');
const apiThemesRoute = require('./routes/themes.routes');

app.use('/api/themes', apiThemesRoute);
app.use('/api/songs', songRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}, port `);
});
