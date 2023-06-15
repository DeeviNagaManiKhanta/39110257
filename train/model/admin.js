const mongoose = require('mongoose');

// Define the schema for the data
const dataSchema = new mongoose.Schema({
  companyName: String,
  ownerName: String,
  rollNo: String,
  ownerEmail: String,
  accessCode: String
});

// Create a mongoose model
const Data = mongoose.model('Data', dataSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    
    // Create a new data document
    const newData = new Data({
      companyName: 'Train Central',
      ownerName: 'Rahul',
      rollNo: '1',
      ownerEmail: 'rahul@abc.edu',
      accessCode: 'FKDLjg'
    });
    
    // Save the data to MongoDB
    newData.save()
      .then(() => {
        console.log('Data saved successfully');
        // Do something after the data is saved
      })
      .catch(error => {
        console.error('Error saving data:', error);
      })
      .finally(() => {
        // Close the MongoDB connection
        mongoose.disconnect();
      });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });
