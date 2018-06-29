import * as functions from 'firebase-functions';
const reqApi = require('request');
const cors = require('cors')({ origin: true });

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

export const getAuthToken = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const encodedBearer =
      'bmlTdWJGS2J6QXkwblIzTTFJNndKY2h5SzprRE16cmhub3d6NXhUSlQyamlhM25ncW9ZZ2FGMUk1QzZmTlRYVGVNUFc1Tzk5eFpEZA==';
    const twitterEndpoint = 'https://api.twitter.com';
    const body = 'grant_type=client_credentials';
    const headers = {
      Authorization: `Basic ${encodedBearer}`,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Content-Length': Buffer.byteLength(body)
    };

    reqApi.post(
      {
        headers,
        url: `${twitterEndpoint}/oauth2/token`,
        body
      },
      (err, res, twResponse) => {
        if (err) {
          console.log('handle response...');
          response.json(err);
        } else {
          response.json(twResponse);
        }
      }
    );
  });
});

export const getTweets = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const token = request.query.token;
    const text = request.query.text;

    console.log('Token: ', token);
    console.log('Text: ', text);

    // count=15
    const url = `https://api.twitter.com/1.1/search/tweets.json?q=${text}&lang=en&tweet_mode=extended&count=30`;

    const headers = {
      Authorization: `Bearer ${token}`
    };

    reqApi.get(
      {
        headers,
        url
      },
      (err, res, twResponse) => {
        console.log('handle response...');
        if (err) {
          response.json(err);
        } else {
          response.json(twResponse);
        }
      }
    );
  });
});
