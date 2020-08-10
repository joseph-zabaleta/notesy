'use strict';

/**
 * Note constructor that creates a note object based on user input
 */
function Notes (action, note) {
    this.id = Math.random(100000);
    this.note = note;
    this.action = action;
};


/**
 * Execute is a method that when ran, has one parameter called method, and validates the method against valid commands.
 *
 * Returns the given method if valid or returns a 'GET'
 * @param {*} method
 */
Notes.prototype.execute = function (method = '') {
    let validMethods = /get|put|patch|post|delete/i;
    return validMethods.test(method) ? method: 'GET';
};


/**
 * Add is a method that will create an object representing a note and console logs the test of the note to be added when the add command is executed
 */
Notes.prototype.add = function (note) {
    let obj = new Notes(note);

    console.log(obj);

    return obj;
};


module.export = Notes;
