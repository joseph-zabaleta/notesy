'use strict';


/**
 * Note class that creates and handles notes from user input.
 * @param {object} obj An object representing user input data to be passed to the note class.
 */
class Note {
    constructor(obj) {
        this.id = Math.floor((Math.random() * (100000))); // Remove me before database
        this.note = obj.payload;
        this.method = this.getMethod(obj.action);

        this.execute(this.method);
    };



    /**
     * This function takes the string action from the user, and converts it to a crud method.
     * @param {string} action Passed in from the constructor, passed into the note class.
     */
    getMethod(action) {
        let validActions = {
            a: 'post',
            add: 'post',
            u: 'put',
            update: 'put',
            d: 'delete',
            delete: 'delete',
        };

        return validActions[action];

    };


    /**
     * Execute takes in CRUD operation method, and executes the appropriate class method.
     * @param {string} method
     */
    execute(method = '') {
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
     * Add will soon add things to a database but for now, just console logs.
     */
    add() {
        console.log('Adding this note to the database(Soon...)', this)
    };


};


module.exports = Note;
