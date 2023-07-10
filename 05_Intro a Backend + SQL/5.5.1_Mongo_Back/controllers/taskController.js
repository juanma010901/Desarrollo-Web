const { Task } = require("../models")

module.exports = {
    findAll: async (req, res) => {
        const tasks = await Task.find();
        return res.status(200).json(tasks);
    },
    findOneById: async (req, res) => {
        const {id} = req.params;
        const tasks = await Task.findById(id);
        return res.status(200).json(tasks);
    },
    create: async(req, res) => {
        const newTask = new Task({...req.body});
        const insertedTask = await newTask.save();
        return res.status(201).json(insertedTask);
    },
    update: async (req, res) => {
        const {id} = req.params;
        await Task.updateOne({ _id: id }, req.body)
        const tasks = await Task.findById(id);
        return res.status(200).json(tasks);
    },
    borrar: async (req, res) => {
        // eliminacion total ☢️☢️☢️
        const { id } = req.params;
        console.log(id)
        const taskToDelete = Task.findByIdAndDelete(id)
        // success 200
        return res.status(200).json(taskToDelete)
    }
}