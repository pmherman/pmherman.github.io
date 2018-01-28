require("dotenv").config();

//packages required for Liri to run
var fs = require("fs");
var twitter = require("twitter");
var spotify = require("node-spotify-api");
var request = require("request");
var keys = require("./keys.js");


//Load client keys
var spotify = new spotify(keys.spotify);
var client = new twitter(keys.twitter);

var userInput = process.argv[2]; //option for user response
var searchInput = process.argv; //input selector for movie or song search
var status = []; //hold tweets
var twitterScreenName = {screenname: "pmherman85", count: 20};

//Twitter call
if (userInput == "my-tweets") {
    client.get("statuses/user_timeline", twitterScreenName, function(err, tweets, response) {
        for (i = 0; i < tweets.length; i++) {
            status.push(tweets[i].text);
        }
        console.log("\nHere are the twitter responses: ");
        //prints to command line
        for (var j = 0; j < status.length; j++) {
            console.log("\nTweet " + j + ": " + JSON.stringify(status[j], null, 2));

        }
        fs.appendFile("tweets.txt","\n" + status, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Tweets written to file");
            }
        })
    });
//Spotify Call
} else if (userInput == "spotify-this-song") {
    var input = "";
    for (var j=3; j < searchInput.length; j++) {
        input = input + searchInput[j];
    }
        spotify.search({ type: 'track', query: input }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        } 
        console.log(JSON.stringify(data, null, 2));
        })
//OMDB Call                
} else if (userInput == "movie-this") {
    var input = "";
    if (searchInput[3] == undefined) {
        input = "Mr + Nobody"; 
    } else {
        for (var j = 3; j < searchInput.length; j++) {
            if (j > 3 && j < searchInput.length) {
                input = input + "+" + searchInput[j];
            } else if (j = 3) {
                input += searchInput[j];
            } 
        }
    }
    var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";

    request(queryUrl, function(err, response, body) {

        if (!err && response.statusCode === 200) {
            console.log("\n=======================\n");
            console.log("Movie Title: " + JSON.parse(body).Title);
            console.log("Year: " + JSON.parse(body).Year);
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings); /*Can't get this working!!!!*/
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Actor(s): " + JSON.parse(body).Actors);
            console.log("Plot: " + JSON.parse(body).Plot);     
            console.log("\n=======================\n");       
        }
        if (!err && response.statusCode === 200) {
            fs.appendFile("tweets.txt", "\nYour last movie search was: " + JSON.parse(body).Title, function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Movie Info written to file");
                }
            });    
        }

    })
}