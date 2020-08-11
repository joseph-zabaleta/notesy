'use strict';

const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');

let userInput = new Input();

if (!userInput.help) {
    new Note(userInput);
}


