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
const adminModel = mongoose.model('Data', dataSchema);

module.exports=adminModel