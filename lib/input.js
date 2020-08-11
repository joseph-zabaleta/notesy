'use strict';

const minimist = require('minimist');
// const error = require('./docs/error.js');

/**
 * A class that handles and validates user input
 */
class Input {
    constructor () {

        let args = minimist(process.argv.slice(2));
        let obj = this.parse(args);

        this.action = obj.action;
        this.payload = obj.payload;
        this.secondAction = obj.secondAction;
        this.category = obj.category;
        this.error = null;
    };

    /**
     * Parse handles the parsing of incoming data from the user
     * @param {object} args Arguments processed from minimist passed from constructor
     */
    parse(args) {

        let data = {};

        data.action = Object.keys(args).slice(1)[0];
        data.payload = args[data.action];
        data.secondAction = Object.keys(args).slice(1)[1] || null;

        if (args[data.secondAction] === true) {
            data.category = true;
        } else {
            data.category = args[data.secondAction] || 'General';
        };

        console.log('im data!', data);

        return data;
    }


    /**
     * Checks the initial properties of the instance.
     * @returns Boolean value, true if object is good, false is something is missing
     */
    validate() {
        let output = true;

        let validActions = {
            a: 'post',
            add: 'post',
            d: 'delete',
            delete: 'delete',
            h: 'help',
            help: 'help',
            l: 'list',
            list: 'list',
        };


        if (!validActions[this.action]) {
            output = false;
            this.error = 'invalidAction';
        };

        if (this.payload === true) {
            output = false;
            this.error = 'invalidPayload';
        };

        if (this.category === true) {
            output = false;
            this.error = 'invalidCategory';
        }


        return output;
    };

};

module.exports = Input;







