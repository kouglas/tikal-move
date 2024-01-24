import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); 
const app = express();
// import cors from 'cors'

// CORS middleware to enable CORS for specific routes
app.use(cors());

// Route to fetch data from an external API and return the response
app.get('/get-score', async (req, res) => {
  try {
    const inputData = {
      "input_data": {
        "columns": ["Wavenumber", "Processed"],
        "data": [
          [257.39, 5769],
          [261.69, 5826],
          [265.99, 5828],
          [270.29, 5874],
          [274.59, 5844],
          [278.89, 5898],
          [283.18, 5957],
          [287.47, 6027],
          [291.76, 6065],
          [296.04, 6066],
          [300.33, 6177],
          [304.61, 6204],
          [308.89, 6339],
          [313.17, 6392],
          [1394.64, 35878]
        ]
      }
    }

    const response = await fetch('https://tikal-deep-learning-cpsgw.eastus2.inference.ml.azure.com/score', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer AzhTpNnYbc9HtpUXdExQ6evjBOkqYrTB',
      },
      body: JSON.stringify(inputData), // Send JSON data in the body
    });

    // Check the Content-Type of the response
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      res.json(data); // Send the fetched JSON data as the response
    } else {
      // Handle non-JSON responses here
      const textData = await response.text();
      console.log('Response:', textData); 
      res.status(500).json({ error: 'Unexpected response format', data: textData });
    }
  } catch (error) {
    res.status(500).json({ error: error.message }); 
  }
});

const listener = app.listen(process.env.PORT || 5001, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});




