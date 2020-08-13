'use strict';

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

    To add a note: -a or --add [message],
    To delete a note: -d or --delete [id],
    To list all notes: -l or --list,
    To list by category: -l or --list [category name]

                        ***********************************
                        **** List of Secondary Actions ****
                        ***********************************
    Adding a category: -c or --category [category],

    Exampless:

    node index.js --add 'Hello' --category 'World'
    node index.js --delete 12345
    node index.js --list
    node index.js --list school


    `);
};

module.exports = help;
