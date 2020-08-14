'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    note: { type: String, required: true },
    category: { type: String, required: true },
});

module.exports = mongoose.model('Notes', schema);
