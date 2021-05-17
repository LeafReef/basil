require('dotenv').config();
const Twitter = require('twitter-lite');
const config = require('./config');

const twitter = new Twitter(config);

const DAY = 86400000;

const tweet = () => {
  twitter
    .post('statuses/update', { status: 'test' })
    .then((result) => {
      console.log(`You tweeted: ${result.text}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

// setInterval(tweet, DAY);
tweet();
