'use strict';

// class Help {
//     constructor (error) {
//         let obj = this.parse(error);
//         this.error = obj.error;
//         this.message = obj.message;

//     };

//     parse(error) {

//     };

// }


let help = {};

help.invalidAction = function () {
    this.help();
    throw 'Invalid Action!'
};

help.invalidPayload = function () {
    this.help();
    throw 'Empty payload! Please provide text.'
};

help.invalidSecondAction = function () {
    this.help();
    throw 'Invalid Secondary Action!'
}

help.invalidCategory = function () {
    this.help();
    throw 'Empty Category! Category flag was given but the field was empty. Please add a category when using the -c or --category flags.'
};

help.help = function () {
    console.log(`
                        ***********************************
                        **** Available list of Actions ****
                        ***********************************

    Syntax:

    node index.js [flag] [message] [optional secondary flag] [optional category]
    ----------------------------------------------------------------------------

    To add a note: -a or --add [param],
    delete a note: Coming soon!,
    update a note: Coming soon!,

                        ***********************************
                        **** List of Secondary Actions ****
                        ***********************************
    Adding a category: -c or --category [param],

    Example:

    node index.js --add 'Hello' --category 'World'


    `);
};

module.exports = help;
