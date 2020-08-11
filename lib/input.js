'use strict';

const minimist = require('minimist');
const error = require('./docs/error.js');

/**
 * A class that handles and validates user input
 */
class Input {
    constructor () {

        let args = minimist(process.argv.slice(2));


        this.action = Object.keys(args).slice(1)[0];
        this.payload = args[this.action];
        this.secondAction = Object.keys(args).slice(1)[1] || null;
        this.category = args[this.secondAction] || 'General';

        this.validate();
    };


    /**
     * Validates all properties of this class, if an issue is found will throw an appropriate error.
     *
     */
    validate() {
        let validActions = {
            a: 'post',
            add: 'post',
            u: 'put',
            update: 'put',
            d: 'delete',
            delete: 'delete',
            h: 'help',
            help: 'help',
            l: 'list',
            list: 'list',
        };


        if (!validActions[this.action]) {
           error.invalidAction();
        };


        if (this.action === 'help' || this.action === 'h') {
            this.payload = 'retreiving help';
            error.help();
            return;
        };


        if (this.action === 'list' || this.action === 'l') {

            if (this.payload === true) {
                this.payload = 'General';
            };

        };


        if (this.payload === true) {
            error.invalidPayload();
        };


        if (!(this.secondAction == 'c' || this.secondAction == 'category' || this.secondAction == null)) {
            error.invalidSecondAction();
        };


        if (this.category === true) {
            error.invalidCategory();
        };

    };

};

module.exports = Input;







