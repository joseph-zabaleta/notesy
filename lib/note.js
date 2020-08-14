'use strict';
const NoteService = require('./model/notes-service.js');
const mongoose = require('mongoose');

const noteService = new NoteService()

/**
 * Note class that creates and handles notes from user input.
 * @param {object} obj An object representing user input data to be passed to the note class.
 */
class Note {
    constructor(obj) {

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
    async execute(method = '') {

        switch (method) {
            case 'list':
                await noteService.list(this.body);
                break;

            case 'post':
                await noteService.add(this.body, this.category);
                break;

            case 'delete':
                await noteService.delete(this.body);
                break;

            default:
                console.log('This should never be called');
                break;
        };

        mongoose.disconnect();
    };
};


module.exports = Note;
