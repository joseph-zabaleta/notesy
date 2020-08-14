'use strict';

const minimist = require('minimist');

/**
 *
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

        if ((data.action == 'l' || data.action == 'list') && data.payload === true) {
            data.payload = null;
        };


        return data;
    }


    /**
     * Checks the initial properties of the instance.
     * @returns Boolean value, true if object is good, false is something is missing
     */
    validate() {

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


        let validSecondActions = {
            c: 'category',
            category: 'category',
            null: null,
        };


        if (!validActions[this.action]) {
            this.error = 'invalidAction';
            return false;
        };


        if (this.payload === true) {

            if (!(validActions[this.action] == 'list')) {
                this.error = 'invalidPayload';
                return false;
            };

        };


        if (this.secondAction !== null && !validSecondActions[this.secondAction] ) {
            this.error = 'invalidSecondAction';
            return false;
        };


        if (this.category === true) {
            this.error = 'invalidCategory';
            return false;
        };


        return true;
    };

};

module.exports = Input;
