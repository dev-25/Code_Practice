const express = require('express');
const moment = require('moment-timezone');

const app = express();

// Define the time zones
const timeZones = [
  'Asia/Japan',
  'Asia/India',
  'Asia/Nepal',
  'Asia/China'
];

// Endpoint to get the current time in the specified time zones
app.get('/current-time', (req, res) => {
  const currentTime = {};

  // Get the current time in each time zone
  timeZones.forEach((timeZone) => {
    currentTime[timeZone] = moment().tz(timeZone).format('YYYY-MM-DD HH:mm:ss');
  });
  
  res.send(currentTime);
});

// Start the server
app.listen(3000, () => {
  console.log(`Server is running on port 3000}`);
});
