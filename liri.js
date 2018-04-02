var dotEnv = require("dotenv").config();
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var fs = require("fs");
var request = require("request");

var keys = require("./keys.js");



var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


// client.get('my-tweets', function(error, tweets, response) {
//     if(error) throw error;
//     console.log(tweets);  // The favorites. 
//     console.log(response);
// });

 
spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
