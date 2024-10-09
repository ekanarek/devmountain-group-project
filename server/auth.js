/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/documentation/web-api/tutorials/code-flow
 */

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import request from "request";
import crypto from "crypto";
import cors from "cors";
import querystring from "querystring";
import cookieParser from "cookie-parser";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Import the User model
import { User } from '../db/db.js';

var client_id = process.env.SPOTIFY_CLIENT_ID; // your clientId
var client_secret = process.env.SECRET; // Your secret
var redirect_uri = "http://localhost:8888/callback"; // Your redirect uri

const generateRandomString = (length) => {
  return crypto.randomBytes(60).toString("hex").slice(0, length);
};

var stateKey = "spotify_auth_state";

var app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app
  .use(express.static(__dirname + "/public"))
  .use(cors())
  .use(cookieParser());

app.get("/login", function (req, res) {
  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = "user-read-private user-read-email";
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })
  );
});

app.get("/callback", function (req, res) {
  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect(
      "/#" +
        querystring.stringify({
          error: "state_mismatch",
        })
    );
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code",
      },
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          new Buffer.from(client_id + ":" + client_secret).toString("base64"),
      },
      json: true,
    };

    request.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        var access_token = body.access_token,
          refresh_token = body.refresh_token;

        var options = {
          url: "https://api.spotify.com/v1/me",
          headers: { Authorization: "Bearer " + access_token },
          json: true,
        };

        // use the access token to access the Spotify Web API
        request.get(options, async function (error, response, body) {
          if (!error && response.statusCode === 200) {
            console.log(body);

            const spotifyId = body.id;
            const displayName = body.display_name || null;

            try {
              // Find or create the user in the database
              const [user, created] = await User.findOrCreate({
                where: { spotify_id: spotifyId }, 
                defaults: {
                  display_name: displayName
                }
              });

              if (created) {
                console.log('New user created: ', user.toJSON());
              } else {
                console.log('User already exists: ', user.toJSON());
              }

              // we can also pass the token to the browser to make requests from there
              res.redirect(
                "/#" +
                  querystring.stringify({
                    access_token: access_token,
                    refresh_token: refresh_token,
                   })
              );
            } catch (dbError) {
              console.error('Database error: ', dbError);
              res.status(500).send('Internal Server Error');
            }
          } else {
            console.error('Error fetching Spotify user profile: ', error);
            res.status(500).send('Failed to fetch user profile');
          }
        });

      } else {
        // Debugging
        console.error('Token request failed: ', error); 
        console.error('Response: ', response); 
        console.error('Body: ', body); 
        
        res.redirect(
          "/#" +
            querystring.stringify({
              error: "invalid_token",
            })
        );
      }
    });
  }
});

app.get("/refresh_token", function (req, res) {
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        new Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
    form: {
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token,
        refresh_token = body.refresh_token;
      res.send({
        access_token: access_token,
        refresh_token: refresh_token,
      });
    }
  });
});

console.log("Listening on 8888");
app.listen(8888);

