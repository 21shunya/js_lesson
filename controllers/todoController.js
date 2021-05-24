const Todo = require('../models/todo');
const throwError = require("../middlewares/utils/utils")

exports.getTodo = async function(req, res){
    if(req.query.id){
        await Todo.findOne({_id: req.query.id}, function(err, todo){
            if(err){
                console.log(err);
                res.status(500).send('Find error'); 
            };
            res.send(todo);
        });
    }
    else{
        await Todo.find({}, function(err, todos){
            if(err){
                console.log(err);
                res.status(500).send('Find error');
            };
            res.send(todos);
        });
    }
};

exports.createTodo = async function(req, res){
    const _title = req.query.title;
    const _description = req.query.description;
    const _isCompleted = req.query.isCompleted;

    const todo = new Todo({title: _title, description: _description, isCompleted: _isCompleted});

    await todo.save(function(err){
        if(err){
            console.log(err);
            res.status(500).send('Save error');
        };
        res.send('Saved');
    });
};

exports.deleteTodo = async function(req, res){
    if(req.query.id){
        Todo.deleteOne({_id: req.query.id}, function(err){
            if(err){
                console.log(err);
                res.status(500).send('Delete error');
            };
            res.send('Deleted');
        });
    }
    else{
        await Todo.deleteMany({}, function(err){
            if(err){
                console.log(err);
                res.status(500).send('Delete error');
            };
            res.send('Deleted');
        });
    }
};

exports.updateTodo = async function(req, res){
    const _title = req.query.title;
    const _description = req.query.description;
    const _isCompleted = req.query.isCompleted;

    if(req.query.id){
        await Todo.updateOne({_id: req.query.id}, {title: _title, description: _description, isCompleted: _isCompleted},
        function(err){
            if(err){
                console.log(err);
                res.status(500).send('Update error');
            };
            res.send('Updated');
        });
    }
};