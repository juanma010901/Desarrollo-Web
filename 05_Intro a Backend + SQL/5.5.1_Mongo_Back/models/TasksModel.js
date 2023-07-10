const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        default: "Task",
        required: true
    },
    content: {
        type: String
    },
    author: {
        type: String
    },
    done: {
        type: Boolean, 
        default: false,
        required: true
    }
})

const Task = mongoose.model("Task", taskSchema)

module.exports = Task