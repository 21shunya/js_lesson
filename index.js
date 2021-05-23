
const express = require('express');
const http = require('http');
//const { syncHandler, errorHandler } = require('./middlewares/middlewares');
//const { throwError } = require('./middlewares/utils/utils');
const app = express();
const mongoose = require('mongoose');
const todoRouter = require('./routes/todoRouter.js');

app.use('/todo', todoRouter);

mongoose.connect('mongodb+srv://mauzzz0:autogeneratedsecurepassword@cluster0.mr2pd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
{useUnifiedTopology: true, useNewUrlParser: true}, (err) => {
    if (err) return console.log(err);
    console.log('Ok')
});



//app.use(syncHandler);
//app.use(errorHandler);


http.createServer(app).listen(3000, () => {
    console.log('Server запущен');
})
