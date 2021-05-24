const express = require('express');
const todoController = require('../controllers/todoController');
const { asyncHandler } = require('../middlewares/middlewares');
const todoRouter = express.Router();

todoRouter.post('/create', asyncHandler(todoController.createTodo));
todoRouter.get('/get', asyncHandler(todoController.getTodo));
todoRouter.patch('/update', asyncHandler(todoController.updateTodo));
todoRouter.delete('/delete', asyncHandler(todoController.deleteTodo));

module.exports = todoRouter;