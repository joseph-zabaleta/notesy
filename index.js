'use strict';

const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');

let userInput = new Input();

// console.log('input index: ', userInput)

new Note(userInput);



