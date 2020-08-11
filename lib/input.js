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
        // this.action = Object.keys(args).slice(1)[0];
        // this.payload = args[this.action];
        // this.secondAction = Object.keys(args).slice(1)[1] || null;
        // this.category = args[this.secondAction] || 'General';
    };


    parse(args) {
        // console.log('this is what args needs to be: ', args);

        let data = {};

        data.action = Object.keys(args).slice(1)[0];
        data.payload = args[data.action];
        data.secondAction = Object.keys(args).slice(1)[1] || null;

        if (args[data.secondAction] === true) {
            data.category = true;
        } else {
            data.category = args[data.secondAction] || 'General';
        };

        return data;
    }



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

    /**
     * Validates all properties of this class, if an issue is found will throw an appropriate error.
     *
     */
    // validate() {
    //     let validActions = {
    //         a: 'post',
    //         add: 'post',
    //         d: 'delete',
    //         delete: 'delete',
    //         h: 'help',
    //         help: 'help',
    //         l: 'list',
    //         list: 'list',
    //     };


    //     if (!validActions[this.action]) {
    //        error.invalidAction();
    //     };


    //     if (this.action === 'help' || this.action === 'h') {
    //         this.payload = 'retreiving help';
    //         error.help();
    //         return;
    //     };


    //     if (this.action === 'list' || this.action === 'l') {

    //         if (this.payload === true) {
    //             this.payload = 'General';
    //         };

    //     };


    //     if (this.payload === true) {
    //         error.invalidPayload();
    //     };


    //     if (!(this.secondAction == 'c' || this.secondAction == 'category' || this.secondAction == null)) {
    //         error.invalidSecondAction();
    //     };


    //     if (this.category === true) {
    //         error.invalidCategory();
    //     };

    //     return true;
    // };

};

module.exports = Input;







