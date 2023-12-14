const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema for pickup_forecast_summary collection
const pickupforecastsummarySchema = new Schema({
  date: {
    type: String,
    required: true
  },
  zone: {
    type: String,
    required: true
  },
  four_week_all: {
    type: Number,
    required: true
  },
  four_week_msq: {
    type: Number,
    required: true
  },
  four_week_non_msq: {
    type: Number,
    required: true
  },
  ninety_day_all: {
    type: Number,
    required: true
  },
  ninety_day_msq: {
    type: Number,
    required: true
  },
  ninety_day_non_msq: {
    type: Number,
    required: true
  },
  created_date: {
    type: Date,
    required: true
  }
});

// Create model for pickup_forecast_summary collection

module.exports = mongoose.model('pickup_forecast_summary', pickupforecastsummarySchema,'pickup_forecast_summary');

// module.exports = PickupForecastSummary;
