'use strict';

require('@code-fellows/supergoose');

const NoteService = require('../lib/model/notes-service.js');
const noteService = new NoteService();


// Set spys on console objects
let spyLog = jest.spyOn(console, 'log');
beforeEach( () => {
    spyLog.mockReset();
});

describe('Testing Note Service Module:', () => {


    describe('Delete Functionality:', () => {

        it('Should not delete a record from the database given a improper ID', async () => {

          let expected = null;
          let id = 12345;

          let actual = await noteService.delete(12345);

          expect(actual).toEqual(expected);

        });

        it('Should delete a record from the database given a proper ID', async () => {

          let expected = await noteService.add('trains go fast', 'trains');

          let actual = await noteService.delete(expected._id);

          expect(actual._id).toEqual(expected._id);
          expect(actual.note).toEqual(expected.note);
          expect(actual.category).toEqual(expected.category);

        });
    });

    describe('List Functionality:', () => {
        it('Should list all notes when given no filter', async () => {
            await noteService.add('message 1', 'General');
            await noteService.add('message 2', 'General');

            let expected = 2;
            let actual = await noteService.list(null);

            expect(actual.length).toEqual(expected);

        });

        it('Should list all notes when given a valid filter', async () => {
            await noteService.add('message 1', 'School');
            await noteService.add('message 2', 'Random'); // NOTE
            await noteService.add('message 3', 'School');

            let expected1 = 1;
            let expected2 = 2
            let actual1 = await noteService.list('Random'); // NOTE
            let actual2 = await noteService.list('School');

            expect(actual1.length).toEqual(expected1);
            expect(actual2.length).toEqual(expected2);

        });

        it('Should return null given an invalid filter', async () => {

            let actual = await noteService.list({});
            expect(actual).toBeNull();

        });
    });

    describe('Add Functionality:', () => {

        it('Should not add to the database given invalid data', async () => {

            let expected = null;
            let actual = await noteService.add();

            expect(actual).toEqual(expected);
        });

        it('Should add to the database given valid data', async () => {

            let expected = {
                note: 'Random Note',
                category: 'Randomness',
            };

            let actual = await noteService.add(expected.note, expected.category);
            expect(actual._id).not.toBeNull();
            expect(actual.note).toEqual(expected.note);
            expect(actual.category).toEqual(expected.category);

        });
    });

});
