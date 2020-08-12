'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    note: { type: String },
    category: { type: String },
});

module.exports = mongoose.model('request', schema);
