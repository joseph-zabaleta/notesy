'use strict';

const minimist = require('minimist');
const error = require('./docs/error.js');

/**
 * Input constructor that creates an object based on the users input
 */
function Input () {
    const args = minimist(process.argv.slice(2));

    this.action = Object.keys(args).slice(1)[0];
    this.payload = Object.values(args).slice(1)[0];

    this.validateAction()
    this.validatePayload();
};

/**
 * Validates the action of the user input to valid actions list. Throws an error if the action flag is not valid.
 */
Input.prototype.validateAction = function () {
    let validActions = /\ba\b|\badd\b|\bu\b|\bupdate\b|\bd\b|\bdelete\b/i;

    if (!(validActions.test(this.action))) {
        error.invalidAction();
    };
};


/**
 * Validates the payload of the user input to ensure there has been text inputted. Throws an error if there was no text added.
 */
Input.prototype.validatePayload = function () {
    if (typeof(this.payload) == 'boolean') {
        error.invalidPayload();
    };
};


module.exports = Input;







