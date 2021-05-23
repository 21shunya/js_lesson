const express = require('express');
const todoController = require('../controllers/todoController');
const todoRouter = express.Router();

todoRouter.post('/create', todoController.createTodo);
todoRouter.get('/get', todoController.getTodo);
//todoRouter.patch('/update', todoController.updateTodo);
//todoRouter.delete('/delete', todoController.deleteTodo);

module.exports = todoRouter;