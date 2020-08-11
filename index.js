'use strict';

const Input = require('./lib/input.js');
const Note = require('./lib/note.js');

let userInput = new Input();

console.log('input index: ', userInput)

console.log('validatation check: ', userInput.validate());


// new Note(userInput);



