const express = require('express');
const http = require('http');
const { initDB } = require('./database/database');
// const { asyncHandler, errorHandler, logger } = require('./middlewares/middlewares');
const todoRouter = require('./routes/todoRouter.js');

const app = express();
//require('./database/database');

initDB();

// app.use(logger);
// app.use(express.json());

app.use('/todo', todoRouter);

// app.use(asyncHandler);
// app.use(errorHandler);

http.createServer(app).listen(3000, () => {
    console.log('Server запущен');
})
