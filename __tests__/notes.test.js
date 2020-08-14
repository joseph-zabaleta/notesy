'use strict';

const Note = require('../lib/note.js');
const NoteService = require('../lib/model/notes-service.js');

jest.mock('../lib/model/notes-service.js');


// Set spys on console objects
let spyLog = jest.spyOn(console, 'log');
beforeEach( () => {
    spyLog.mockReset();
});


describe('Testing Note Class Functionality: ', () => {


    it('Should execute the add service function', async () => {

        let mockInput = {
            action: 'add',
            payload: 'Message to save',
            secondAction: null,
            category: 'General',
        };

        let actual = new Note(mockInput);
        let pizza = NoteService.mock.instances[0];

        expect(pizza.add).toHaveBeenCalledTimes(1);
        expect(actual.method).toEqual('post');
    });


    it('Should execute the list service function', () => {
        let mockInput = {
            action: 'list',
            payload: 'General',
            secondAction: null,
            category: 'General',
        };

        let actual = new Note(mockInput);
        let pizza = NoteService.mock.instances[0];

        expect(pizza.list).toHaveBeenCalledTimes(1);
        expect(actual.method).toEqual('list');
    });


    it('Should execute the delete service function', () => {
        let mockInput = {
            action: 'delete',
            payload: 'Message to save',
            secondAction: null,
            category: 'General',
        };

        let actual = new Note(mockInput);
        let pizza = NoteService.mock.instances[0];

        expect(pizza.delete).toHaveBeenCalledTimes(1);
        expect(actual.method).toEqual('delete');
    });

});
