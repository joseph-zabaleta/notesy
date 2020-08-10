'use strict';

/**
 * Input constructor that creates an object based on the users input
 * @param {object} args User input arguments object
 */
function Input (args) {

    this.action = Object.keys(args).slice(1)[0];
    this.payload = Object.values(args).slice(1)[0];

    this.validateAction();
    this.validatePayload();
};

/**
 * Validates the action of the user input to valid actions list. Throws an error if the action flag is not valid.
 */
Input.prototype.validateAction = function () {
    let validActions = /a\b|add\b|u\b|update\b|d\b|delete\b/i;

    if (!(validActions.test(this.action))) {
        throw 'Invalid Flag! Available options are: -a or --add';
    };
};


/**
 * Validates the payload of the user input to ensure there has been text inputted. Throws an error if there was no text added.
 */
Input.prototype.validatePayload = function () {
    if (typeof(this.payload) == 'boolean') {
        throw 'Empty payload! Please provide text.'
    };
};


module.exports = Input;







