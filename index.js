'use strict';

const Input = require('./lib/input.js');
const Note = require('./lib/note.js');
const help = require('./lib/docs/help.js');

let userInput = new Input();

console.log('INPUT:', userInput);
console.log('validation: ', userInput.validate())

if (userInput.validate()) {
    new Note(userInput);
} else {
    let error = userInput.error;
    help[error]();
};




