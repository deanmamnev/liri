require("dotenv").config();





var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


client.get('my-tweets', function(error, tweets, response) {
    if(error) throw error;
    console.log(tweets);  // The favorites. 
});
