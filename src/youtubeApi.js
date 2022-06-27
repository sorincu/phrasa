// API requirements
require('dotenv').config();
const { google } = require('googleapis');

google.youtube('v3').search.list({
    key: process.env.REACT_APP_YOUTUBE_TOKEN,
    part: 'snippet',
    q: 'venetian snares',
    maxResults: 5,
}).then((response) => {
    const { data } = response;
    data.items.forEach((item) => {
        console.log(`Title: ${item.snippet.title}\nDescription: ${item.snippet.description}\n`)
    })
}).catch((err) => console.log(err));