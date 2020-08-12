'use strict';

const mongoose = require('mongoose');

const Schema = require('./notes-schema.js');
const { schema } = require('./notes-schema.js');

class NoteService {
    constructor() {};

    add(body, category) {
        console.log('Adding this note to the database(Soon...)')

        const note = new Schema({
            note: body,
            category: category,
        });

        note.save().then(() => {
            console.log('It has been saved!');
            mongoose.disconnect();
        })


    };

    delete(id) {
        console.log(`Deleting note with the ID: ${id}`);

    };

    list(category) {
        console.log(`Retrieving list of notes from category: ${category}`)

        Schema.find({
            category: category,
        }).then(response => {
            console.log(response);
            mongoose.disconnect();
        })

    };

};

module.exports = new NoteService;
