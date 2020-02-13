var express = require('express');
var router = express.Router();
var Task = require("../model/Task");


// GET all task
router.get("/tasks", (req, res, next) => {
    Task.findAll()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => {
            res.send("error : " + err)
        })
})

// Add task
router.post("/task", (req, res, next) => {
    if (!req.body.task_name) {
        res.status(400);
        res.json({
            error: "Bad Data"
        })
    } else {
        Task.create(req.body)
            .then(() => {
                res.send("Task Added")
            })
            .catch(err => {
                res.send("error : " + err)
            })
    }
})

// Delete task
router.delete("/task/:id", (req, res, next) => {
    Task.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.send("Task deleted !")
        })
        .catch(err => {
            res.send("error : " + err)
        })
})


// Update task
router.put("/task/:id", (req, res, next) => {
    if (!req.body.task_name) {
        res.send(400)
        res.json({
            error: "Bad data"
        })
    } else {
        Task.update({
                task_name: req.body.task_name
            }, {
                where: { id: req.params.id }
            })
            .then(() => {
                res.send("Task updated !")
            })
            .catch(err => {
                res.json("error : " + err)
            })
    }
})

module.exports = router