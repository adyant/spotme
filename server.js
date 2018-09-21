const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const querystring = require('querystring');
const cookieParser = require('cookie-parser');

const urlForTrack = id => `https://api.spotify.com/v1/tracks/${id}`
const urlForToken = 'https://accounts.spotify.com/api/token';
const CLIENT_ID = 'dba456285e844d6fa6518d5c6a65dbac';
const CLIENT_SECRET = 'fa1a64b876ac4da08ad9205299f44a75';


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT; BUT THIS THE HOMEPAGE' });
});

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get(urlForTrack, (req, res) => {
	
});


	);
*/