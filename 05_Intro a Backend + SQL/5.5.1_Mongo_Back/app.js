const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const tasksRouter = require('./routes/taskRoute');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const mongoConnect = async () => {
    try{
        await mongoose.connect(
            "mongodb+srv://Juan:Juan@cluster0.4ft4cv0.mongodb.net/?retryWrites=true&w=majority"
        )
        console.log("Connected to Mongo")
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);

mongoConnect()

module.exports = app;
