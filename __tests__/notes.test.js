'use strict';

const Note = require('../lib/note');

// Set spys on console objects
const spyLog = jest.spyOn(console, 'log');
const spyError = jest.spyOn(console, 'error');

beforeEach( () => {
    spyLog.mockReset();
    spyError.mockReset();
});

// afterEach( () => {
//     expect(spyLog).not.toHaveBeenCalled();
//     expect(spyError).not.toHaveBeenCalled();
// });

describe('Testing Note Class Functionality: ', () => {

    it('Demo Test', () => {
        expect(1).toStrictEqual(1);
    });

    it('Should return a valid Note Object', () => {

        let mockInput = {
            action: 'add',
            payload: 'Message to save',
            secondAction: null,
            category: 'General',
        };

        new Note(mockInput);


        expect(console.log).toHaveBeenCalled();
    });

    console.log(spyLog.getMockImplementation());

});
