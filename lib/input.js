'use strict';

/**
 * Input constructor that creates an object based on the users input
 *
 */
function Input (args) {

    this.action = Object.keys(args).slice(1)[0];
    this.payload = Object.values(args).slice(1)[0];
    this.valid = this.validate();

};

/**
 * Validates both the action and payload of the users input
 */
Input.prototype.validate = function () {
    let output = false;

    let validActions = /a\b|add\b/i;

    if (typeof(this.payload) != 'boolean' && validActions.test(this.action)) {
        output = true;
    };

    return output;
};


module.exports = Input;







