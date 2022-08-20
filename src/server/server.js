const express = require("express");
const SpotifyWebApi = require("spotify-web-api");


const app = express();
const code = req.body.code;
app.post("/login", (req, res) => {
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientID: "c84bc9400d084613ad02791a90a34969",
    clientSecret: "f9775eadb59a4ea7ae4cbe1189d53b82",
  });
  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        exparesIn: data.body.expares_in,
      });
    })
    .catch(() => {
      res.sendStatus(400);
    });
});
