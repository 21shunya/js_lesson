const { asyncHandler } = require('../middlewares/middlewares');
const ToDo = require('../database/models/ToDo');

exports.getToDoID = async function (req, res) {
    const todo = await ToDo.findByPk( req.params.id );
    res.status(200).json(todo);
};

exports.getTodos = async function (req, res) {
    const todos = await ToDo.findAll();
    res.status(200).json(todos);
};

exports.createTodo = async function (req, res) {
    const todo = await ToDo.build(req.body);
    await todo.save();

    res.status(200).json({todo});
};

exports.deleteTodoID = async function (req, res) {
    const todo = await ToDo.findByPk(req.params.id);
    await todo.destroy();

    res.status(200).json({message: 'Deleted'});
}

exports.deleteTodos = async function (req, res) {

    await ToDo.destroy({
        truncate: true
    });
    res.status(200).json({message: 'All deleted'});
}

exports.updateTodo = async function (req, res) {
    const todo = await ToDo.findByPk(req.params.id);
    await todo.update(req.body);
    res.status(200).send(todo);
};