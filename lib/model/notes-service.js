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

        Schema.findByIdAndDelete(id).then(response => {
            console.log(response);
            mongoose.disconnect();
        })

    };

    list(category) {

        let pizza = {};

        if (category !== true) {

            console.log(`Retrieving list of notes from category: ${category}`)

            pizza = {
                category: category,
            };

        } else {
            console.log(`Retrieving list of notes from All Categories`)
        };

        Schema.find(pizza).then(response => {
            console.log(response);
            mongoose.disconnect();
        })
    };

};

module.exports = new NoteService;
