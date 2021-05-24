const express = require('express');
const http = require('http');
const { asyncHandler, errorHandler, logger } = require('./middlewares/middlewares');
const app = express();
const todoRouter = require('./routes/todoRouter.js');
require('./database/database');

app.use(logger);

app.use('/todo', todoRouter);

app.use(asyncHandler);
app.use(errorHandler);


http.createServer(app).listen(3000, () => {
    console.log('Server запущен');
})
