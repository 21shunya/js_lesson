const express = require('express');
const http = require('http');
//const { syncHandler, errorHandler } = require('./middlewares/middlewares');
//const { throwError } = require('./middlewares/utils/utils');
const app = express();

const todoRouter = require('./routes/todoRouter.js');
require('./database/database');
app.use('/todo', todoRouter);

//app.use(syncHandler);
//app.use(errorHandler);


http.createServer(app).listen(3000, () => {
    console.log('Server запущен');
})
