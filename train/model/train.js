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

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Example train data
    const trainData = [
      {
        trainName: 'Chennai Exp',
        trainNumber: '2344',
        departureTime: {
          hours: 21,
          minutes: 35,
          seconds: 0
        },
        seatsAvailable: {
          sleeper: 3,
          AC: 1
        },
        price: {
          sleeper: 2,
          AC: 5
        },
        delayedBy: 15
      },
      {
        trainName: 'Hyderabad Exp',
        trainNumber: '2341',
        departureTime: {
          hours: 23,
          minutes: 55,
          seconds: 0
        },
        seatsAvailable: {
          sleeper: 6,
          AC: 7
        },
        price: {
          sleeper: 554,
          AC: 1854
        },
        delayedBy: 5
      }
    ];

    // Save the train data to MongoDB
    Train.insertMany(trainData)
      .then(() => {
        console.log('Train data saved successfully');
        // Do something after the data is saved
      })
      .catch(error => {
        console.error('Error saving train data:', error);
      })
      .finally(() => {
        // Close the MongoDB connection
        mongoose.disconnect();
      });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });
