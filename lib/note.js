'use strict';


/**
 * Note class that creates and handles notes from user input.
 * @param {object} obj An object representing user input data to be passed to the note class.
 */
class Note {
    constructor(obj) {
        this.id = Math.floor((Math.random() * (100000))); // Remove me before database
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
                this.list();
                break;

            case 'post':
                this.add();
                break;

            // case 'put':
            //     this.update();
            //     break;

            case 'delete':
                this.delete();
                break;

            default:
                console.log('default')
                break;
        };
    };


    /**
     * Add will soon add things to a database but for now, just console logs.
     */
    add() {
        console.log('Adding this note to the database(Soon...)')
    };


    /**
     * List will soon list all notes in general category or given category
     */
    list() {
        console.log(`Retrieving list of notes from category: ${this.category}`)
    };


    /**
     * Update will handle changing of existing notes in the database
     */
    // update() {
    //     console.log(`Updating note with the ID: ${this.body}`);
    // };


    /**
     * Delete will remove an existing note in the database
     */
    delete() {
        console.log(`Deleting note with the ID: ${this.body}`);
    };
};


module.exports = Note;
