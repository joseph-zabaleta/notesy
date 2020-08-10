'use strict';

/**
 * Note constructor that creates a note object based on user input
 */
function Notes (obj) {
    let validActions = {
        a: 'post',
        add: 'post',
        u: 'put',
        update: 'put',
        d: 'delete',
        delete: 'delete',
    };


    this.id = Math.floor((Math.random() * (100000)));
    this.note = obj.payload;
    this.method = validActions[obj.action];

    this.execute(this.method);
};


/**
 * Execute is a method that when ran, has one parameter called method, and validates the method against valid commands.
 *
 * Returns the given method if valid or returns a 'GET'
 * @param {*} method
 */
Notes.prototype.execute = function (method = '') {

    switch (method) {
        case 'post':
            this.add()
            break;

        case 'put':
            break;

        case 'delete':
            break;

        default:
            break;
    };
};


/**
 * Add is a method that will create an object representing a note and console logs the note to be added when the add command is executed
 */
Notes.prototype.add = function () {
    console.log(this.note);
};




module.exports = Notes;
