require('dotenv').config();
const axios = require('axios');
const Twitter = require('twitter-lite');
const config = require('./config');

const twitter = new Twitter(config);

const DAY = 86400000;

const tweet = () => {
  axios('https://leafreef.herokuapp.com/api/list')
    .then((res) => res.data)
    .then((data) => {
      twitter.post('statuses/update', {
        status: `Temperature: ${data.temperature}°C\nHumidity: ${data.humidity}%`,
      });
    });
};

setInterval(tweet, DAY);
