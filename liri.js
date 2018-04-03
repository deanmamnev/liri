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


var params = {screen_name: '@phil_skeezix'};
client.get('statuses/user_timeline', function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
 
spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });




// movie-this [processargv3]

if (process.argv[2] === "movie-this"){

var movieName = process.argv[3];
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {



    console.log("Title: " + JSON.parse(body.Title));
    console.log("Release Year: " + JSON.parse(body.Year));
    console.log("IMDB Rating: " + JSON.parse(body.Rating));
    console.log("Rotton Tomatoes Rating: " + JSON.parse(body.Title));
    console.log("Country: " + JSON.parse(body.Country));
    console.log("Language: " + JSON.parse(body.Language));
    console.log("Plot: " + JSON.parse(body.Plot));
    console.log("Starring: " + JSON.parse(body.Actors));
  }
});
};



if (process.argv[2] == 'do-what-it-says') { 
    fs.readFile('random.txt', 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
      var results = data.split(',');
      console.log(results);
      if (results[0] == 'spotify-this-song') {
        spotifyThis(results[1]);
      }
      if (results[0] == 'my-tweets') {
        tweetThis(results[1]);
      }
      if (results[0] == 'movie-this') {
        omdbIt(results[1]);
      }
    })
  }