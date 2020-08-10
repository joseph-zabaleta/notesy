'use strict';

/**
 * Input constructor that creates an object based on the users input
 *
 */
function Input (args) {

    this.action = Object.keys(args).slice(1)[0];
    this.payload = Object.values(args).slice(1)[0];
    // this.valid = this.validate();

    this.validateAction();
    this.validatePayload();
};

/**
 * Validates both the action and payload of the users input
 */
// Input.prototype.validate = function () {
//     let output = false;

//     let validActions = /a\b|add\b/i;

//     if (typeof(this.payload) != 'boolean' && validActions.test(this.action)) {
//         output = true;
//     };

//     return output;
// };


/**
 * Validates the action of the user input to valid actions list. Throws an error if the action flag is not valid.
 */
Input.prototype.validateAction = function () {
    let validActions = /a\b|add\b/i;

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







