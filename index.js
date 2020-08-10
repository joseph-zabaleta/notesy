'use strict';

const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');

const minimist = require('minimist');
const args = minimist(process.argv.slice(2));

let userInput = new Input(args);

let note = new Note(userInput);

