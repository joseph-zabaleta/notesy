'use strict';

const NoteService = require('./model/notes-service.js');

/**
 * Note class that creates and handles notes from user input.
 * @param {object} obj An object representing user input data to be passed to the note class.
 */
class Note {
    constructor(obj) {
        // this.id = Math.floor((Math.random() * (100000))); // Remove me before database
        this.body = obj.payload;
        this.category = obj.category;
        this.method = this.getMethod(obj.action);

        this.execute(this.method);
    };



    /**
     * This function takes the string action from the user, and converts it to a crud method.
     * @param {string} action Passed in from the constructor, passed into the note class.
     * @returns Either the appropriate CRUD operation or Help / List option.
     */
    getMethod(action) {
        let validActions = {
            a: 'post',
            add: 'post',
            u: 'put',
            update: 'put',
            d: 'delete',
            delete: 'delete',
            h: 'help',
            help: 'help',
            l: 'list',
            list: 'list',
        };

        return validActions[action];

    };


    /**
     * Execute takes in CRUD operation method, and executes the appropriate class method.
     * @param {string} method
     */
    execute(method = '') {
        switch (method) {
            case 'list':
                // this.list();
                NoteService.list(this.body);
                break;

            case 'post':
                // this.add();

                NoteService.add(this.body, this.category);
                break;

            case 'delete':
                NoteService.delete(this.body);
                // this.delete();
                break;

            default:
                console.log('This should never be called');
                break;
        };
    };


    // /**
    //  * Add will soon add things to a database but for now, just console logs.
    //  */
    // add() {
    //     console.log('Adding this note to the database(Soon...)')
    //     let note = {
    //         note: this.body,
    //         category: this.category,
    //     };


    // };


    // /**
    //  * List will soon list all notes in general category or given category
    //  */
    // list() {
    //     console.log(`Retrieving list of notes from category: ${this.category}`)
    // };


    // /**
    //  * Delete will remove an existing note in the database
    //  */
    // delete() {
    //     console.log(`Deleting note with the ID: ${this.body}`);
    // };
};


module.exports = Note;
