const express = require("express");
const router = express.Router();
const admin=require("../model/admin");

// Define route handlers
router.get("/", (req, res) => {
 console.log("Post Working")
});

router.post("/", async(req, res) => {
  try {
    // Extract the data from the request body
    const { companyName, ownerName, rollNo, ownerEmail, accessCode } = req.body;

    // Create a new record using the adminModel
    const newRecord = new admin({
      companyName,
      ownerName,
      rollNo,
      ownerEmail,
      accessCode,
    });

    // Save the record to the database
    const savedRecord = await newRecord.save();

    res.status(201).json(savedRecord); // Return the saved record as the response
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'An error occurred' });
  }
})


// Other route handlers...

module.exports = router;
