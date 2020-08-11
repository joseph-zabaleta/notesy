'use strict';

jest.mock('minimist');
const minimist = require('minimist');

minimist.mockImplementation(() => {
    return {
        _: [],
        add: 'This is a note',
    };
});

const Input = require('../lib/input.js');

describe('Testing the Input Class Module:', () => {

    it('Should be able to parse user input and create an object', () => {
        let mockInput = new Input();
        let obj = mockInput.parse({_: [], add: 'test' });
        expect(obj.action).toBe('add');
        expect(obj.payload).toBe('test');
    });

    it('Should pass validation if all properties are acceptable', () => {
        let mockInput = new Input();
        expect(mockInput.validate()).toBeTruthy();
    });

    it('Should fail validation if properties are unacceptable or missing', () => {
        let mockInput = new Input();
        mockInput.action = null ; // break it
        expect(mockInput.validate()).toBeFalsy();
    });

});
