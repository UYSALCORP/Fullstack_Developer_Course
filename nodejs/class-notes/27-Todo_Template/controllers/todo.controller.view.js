"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const Todo = require('../models/todo.model');

const PRIORITIES = {
    '-1': 'Low',
    '0': 'Normal',
    '1': 'High',
}

module.exports = {
    list: async (req, res) => {

        // const result = await Todo.findAll(); // select * from ...
        // const result = await Todo.findAll({ attributes: ['title', 'description'] }); // select title, description from ...
        const result = await Todo.findAndCountAll();

        res.render('index', { todos: result.rows, count: result.count, priorities: PRIORITIES });
    },

    create: async (req, res) => {

        if (req.method === 'POST') {
            const result = await Todo.create(req.body);

            if (result) res.redirect('/view');

        } else {

            res.render('todoCreate');
        }

    },

    read: async (req, res) => {

        // const result = await Todo.findOne({ where: { id: req.params.id } });
        const todo = await Todo.findByPk(req.params.id);

        res.render('todoRead', { todo, priorities: PRIORITIES });
    },

    update: async (req, res) => {


        if (req.method === 'POST') {
            const result = await Todo.update(req.body, { where: { id: req.params.id } }); // returns [1] or [0]
            res.redirect('/view');
        } else {
            const todo = await Todo.findByPk(req.params.id);

            res.render('todoUpdate', { todo , priorities: PRIORITIES})
        }
    },

    delete: async (req, res) => {
        // todo homework

        // await Todo.destroy({...where})
        const result = await Todo.destroy({ where: { id: req.params.id } }); // returns 1 or 0

        // res.status(204).send({ // 204 No Content
        //     error: false,
        //     result,
        // });

        if (result) {
            res.sendStatus(204);
        } else {
            // res.status(404).send({
            //     error: true,
            //     message:"Data is not found or it is already deleted.",
            // });
            res.errorStatusCode = 404;
            throw new Error("Data is not found or it is already deleted.");
        };
    }
};