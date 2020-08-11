'use strict';

let error = {};

error.invalidAction = function () {
    this.help();
    throw 'Invalid Action!'
};

error.invalidPayload = function () {
    this.help();
    throw 'Empty payload! Please provide text.'
};

error.help = function () {
    console.log(`
    ***********************************
    **** Available list of Actions ****
    ***********************************

    To add a note: -a or --add [param],
    To delete a note: -d or --delete [id];
    `);
};

module.exports = error;
