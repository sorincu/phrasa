// API requirements
require('dotenv').config();
const { google } = require('googleapis');

google.youtube('v3').search.list({
    key: process.env.YOUTUBE_TOKEN,
    part: 'snippet',
    q: 'joji',
}).then((response) => {
    console.log(response.data);
}).catch((err) => console.log(err));