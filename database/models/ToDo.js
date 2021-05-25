const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class ToDo extends Sequelize.Model {}

ToDo.init(
    {
        title: {
            type: Sequelize.STRING,
            defaultValue: 'Title',
        },
        description: {
            type: Sequelize.STRING,
            defaultValue: 'Description',
        },
        isCompleted: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
    },
    { sequelize: sequelize, underscored: true, modelName: 'todo' }
);

ToDo.sync();

module.exports = ToDo;
