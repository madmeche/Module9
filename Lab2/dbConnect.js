'use strict';
const Mongoose = require('mongoose');
const uri = process.env.DB_URI ||
"mongodb://localhost/blogApp";

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

//connect to MongoDB
Mongoose.connect(uri, mongooseOptions)
.then(() => console.log('MongoDB Connected'))
.catch(error => console.log('MongoDB Error: ' + error.message));

//get the connection
const db = Mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

exports.Mongoose = Mongoose;
