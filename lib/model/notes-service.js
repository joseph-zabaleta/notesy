'use strict';

const mongoose = require('mongoose');

class NoteService {
    constructor() {};

    add() {
        console.log('Adding this note to the database(Soon...)')

    };

    delete() {
        console.log(`Deleting note with the ID:`);
    };

    list() {
        console.log(`Retrieving list of notes from category:`)

    };

};

module.exports = new NoteService;
