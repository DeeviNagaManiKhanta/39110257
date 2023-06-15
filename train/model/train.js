const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
  trainName: String,
  trainNumber: String,
  departureTime: {
    hours: Number,
    minutes: Number,
    seconds: Number
  },
  seatsAvailable: {
    sleeper: Number,
    AC: Number
  },
  price: {
    sleeper: Number,
    AC: Number
  },
  delayedBy: Number
});

const Train = mongoose.model('Train', trainSchema);
