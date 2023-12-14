const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pick_forecastSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    zone: {
        type: String,
        required: true
    },
    num_alloc_all: {
        type: Number,
        required: true
    },
    num_alloc_msq: {
        type: Number,
        required: true
    },
    num_alloc_non_msq: {
        type: Number,
        required: true
    },
    created_date: {
        type: Date,
        required: true
    },
   
});

module.exports = mongoose.model('pick_forecast',pick_forecastSchema,'pick_forecast');