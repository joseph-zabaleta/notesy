'use strict';

const mongoose = require('mongoose');

const Input = require('./lib/input.js');
const Note = require('./lib/note.js');
const help = require('./lib/docs/help.js');

// mongoose.connect('mongodb://localhost:27017/notesy', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', () => {
//     console.log('Unable to connect to MongoDB. Did you forget to start your service?');
// });
// db.on('open', () => {
//     console.log('Successfully Connected to MongoDB.');
// });


let userInput = new Input();

if (userInput.validate()) {
    new Note(userInput);
} else {
    let error = userInput.error;
    help[error]();
};

console.log('bottom of index')


