'use strict';

const mongoose = require('mongoose');

const Schema = require('./notes-schema.js');

class NoteService {
    constructor() {};

    add(body, category) {
        console.log('Adding this note to the database(Soon...)')
        console.log(body, category);


        const note = new Schema({
            note: body,
            category: category,
        });

        note.save().then(() => {
            console.log('It has been saved!');
            mongoose.connection.close();
        })


    };

    delete(id) {
        console.log(`Deleting note with the ID: ${id}`);
    };

    list(category) {
        console.log(`Retrieving list of notes from category: ${category}`)
    };

};

module.exports = new NoteService;
