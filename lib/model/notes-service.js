'use strict';

const mongoose = require('mongoose');

const Schema = require('./notes-schema.js');
const { schema } = require('./notes-schema.js');

class NoteService {
    constructor() {};

    async add(body, category) {

        const note = new Schema({
            note: body,
            category: category,
        });

        try {
            let output = await note.save();
            console.log('Note successfully added to the database.')

            return output;
        } catch (err) {
            console.log(`Attempt to save to the database Failed.`)
            console.log('error===', err);


            return null;
        };
    };


    async delete(id) {

        try {
            let output = await Schema.findByIdAndDelete(id)
            console.log(`Deleting note with the ID: ${id}`);
            console.log('delete success output',output);

            return output;
        } catch(err) {
            console.log(`Deletion Failed. No record found with ID: ${id}`)
            console.log('delete error ===', err);

            return null;
        };
    };

    async list(category) {

        let pizza = {};

        if (category !== null) {

            console.log(`Retrieving list of notes from category: ${category}`)

            pizza = {
                category: category,
            };

        } else {
            console.log(`Retrieving list of notes from All Categories`)
        };

        try {
            let output = await Schema.find(pizza)

            if (output.length == 0){
                console.log('You have no saved notes!');
            } else {
                console.log(output);
            }
            return output;
        } catch (err) {
            console.log('****', err);
            return null;
        }

    };

};

module.exports = NoteService;
