
//const { request, response } = require('express');
const Todo = require('../models/todo');

exports.getTodo = async function(req, res){
    if(req.query.id){
        Todo.findOne({_id: req.query.id}, function(err, todo){
            if(err) return console.log(err);
            res.send(todo);
        });
    }
    else{
        Todo.find({}, function(err, todos){
            if(err) return console.log(err);
            res.send(todos);
        });
    }
};

exports.createTodo = async function(req, res){
    const _title = req.query.title;
    const _description = req.query.description;
    const _isCompleted = req.query.isCompleted;

    const todo = new Todo({title: _title, description: _description, isCompleted: _isCompleted});

    todo.save(function(err){
        if(err) return console.log(err);
        res.send('Saved');
    });
};

exports.deleteTodo = async function(req, res){
    if(req.query.id){
        Todo.deleteOne({_id: req.query.id}, function(err){
            if(err) return console.log(err);
            res.send('Deleted');
        });
    }
    else{
        Todo.deleteMany({}, function(err){
            if(err) return console.log(err);
            res.send('Deleted');
        });
    }
};

exports.updateTodo = async function(req, res){
    const _title = req.query.title;
    const _description = req.query.description;
    const _isCompleted = req.query.isCompleted;

    if(req.query.id){
        Todo.updateOne({_id: req.query.id}, {title: _title, description: _description, isCompleted: _isCompleted},
        function(err){
            if(err) return console.log(err);
            res.send('Updated');
        });
    }
};