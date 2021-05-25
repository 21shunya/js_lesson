// const { asyncHandler } = require('../middlewares/middlewares');
const ToDo = require('../database/models/ToDo');
//const throwError = require("../middlewares/utils/utils")

exports.getToDoID = async function (req, res) {
    await ToDo.findByPk({ _id: req.params.id }, function (err, todo) {
        if (err) {
            console.log(err);
            res.status(500).json({ message: 'Find error'});
        };
        res.send(todo);
    });
};

// exports.getTodos = async function (req, res) {
//     await ToDo.findAll({}, function (err, todos) {
//         if (err) {
//             console.log(err);
//             res.status(500).json({ message: 'Find error'});
//         };
//         res.send(todos);
//     });
// };

// exports.createTodo = async function (req, res) {
//     const _title = req.body.title;
//     const _description = req.body.description;
//     const _isCompleted = req.body.isCompleted;

//     const todo = new ToDo({ title: _title, description: _description, isCompleted: _isCompleted });

//     await todo.save(function (err) {
//         if (err) {
//             console.log(err);
//             res.status(500).send('Save error');
//         };
//         res.status(200).json({message: 'Saved'});
//     });
// };

// exports.deleteTodoID = async function (req, res) {
//     await ToDo.deleteOne({ _id: req.params.id }, function (err) {
//         if (err) {
//             console.log(err);
//             res.status(500).send('Delete error');
//         };
//         res.status(200).json({message: 'Deleted'});
//     })
// }

// exports.deleteTodos = async function (req, res) {

//     await ToDo.deleteMany({}, function (err) {
//         if (err) {
//             console.log(err);
//             res.status(500).send('Delete error');
//         };
//         res.status(200).json({message: 'Deleted'});
//     });
// };

// exports.updateTodo = async function (req, res) {
//     const _title = req.body.title;
//     const _description = req.body.description;
//     const _isCompleted = req.body.isCompleted;

//     await ToDo.update({ _id: req.params.id }, { title: _title, description: _description, isCompleted: _isCompleted });
//     const todo = await Todo.findOne({ _id: req.params.id});
//     res.status(200).send(todo);
// };