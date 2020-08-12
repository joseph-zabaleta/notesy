'use strict';

const Note = require('../lib/note.js');

// Set spys on console objects
let spyLog = jest.spyOn(console, 'log');

beforeEach( () => {
    spyLog.mockReset();
});

describe('Testing Note Class Functionality: ', () => {


    it('Should create a new instance of the Note Class', () => {

        let mockInput = {
            action: '',
            payload: 'Message to save',
            secondAction: null,
            category: 'General',
        };

        new Note(mockInput);

        expect(spyLog).toHaveBeenCalled();
    });


    it('Should confirm the executing of "Add" ', () => {
        let mockInput = {
            action: 'add',
            payload: 'Message to save',
            secondAction: null,
            category: 'General',
        };

        new Note(mockInput);

        expect(spyLog).toHaveBeenCalledWith('Adding this note to the database(Soon...)')
    });


    it('Should confirm the executing of "List" ', () => {
        let mockInput = {
            action: 'list',
            payload: 'General',
            secondAction: null,
            category: 'General',
        };

        new Note(mockInput);

        expect(spyLog).toHaveBeenCalledWith('Retrieving list of notes from category: General')
    });


    it('Should confirm the executing of "Delete" ', () => {
        let mockInput = {
            action: 'delete',
            payload: 'Message to save',
            secondAction: null,
            category: 'General',
        };

        new Note(mockInput);

        expect(spyLog).toHaveBeenCalledWith('Deleting note with the ID: Message to save')
    });

});
