'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const minimist = require('minimist');
const args = minimist(process.argv.slice(2));

let userInput = new Input(args);

console.log('my input = ', userInput);

