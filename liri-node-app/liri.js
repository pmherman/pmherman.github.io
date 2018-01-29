require("dotenv").config();

//packages required for Liri to run
var fs = require("fs");
var twitter = require("twitter");
var spotify = require("node-spotify-api");
var request = require("request");
var keys = require("./keys.js");
var searchInput = "";
if (process.argv.length > 2) {
    for (var i = 3; i < process.argv.length; i++) {
        searchInput += process.argv[i] + "+";
    }
}
//Load client keys
var spotify = new spotify(keys.spotify);
var client = new twitter(keys.twitter);
//Function to call Twitter API
var twitterCall = function() {
    var status = []; //hold tweets
    var twitterScreenName = {screenname: "pmherman85", count: 20};
    client.get("statuses/user_timeline", twitterScreenName, function(err, tweets, response) {
        for (i = 0; i < tweets.length; i++) {
            status.push({
                "Tweet: ": tweets[i].text,
                "Created at: ": tweets[i].created_at,
        });
    }
        console.log("\nHere are the twitter responses: ");
        //prints to command line
        for (var j = 0; j < status.length; j++) {
            console.log("\nTweet " + j + ": " + JSON.stringify(status[j], null, 2));

        }
        fs.appendFile("log.txt","\n" + status + "\n", function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Tweets written to file");
            }
        })
    });
}
//Function to call Spotify API
var spotifyCall = function(searchInput) {

    spotify.search({ type: 'track', query: searchInput }, function(err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    } 
    console.log(JSON.stringify(data, null, 2));
    })
}
//Function to call OMDB
var omdbCall = function(searchInput) {
    if (searchInput == "") {
        searchInput = "Mr+Nobody";
    }
    var queryUrl = "http://www.omdbapi.com/?t=" + searchInput + "&y=&plot=short&apikey=trilogy";
    request(queryUrl, function(err, response, body) {
        //Function for Rotten Tomates Rating
        var movieRatings = function() {
            if (JSON.parse(body).Ratings.length < 2 ) {
                console.log("Rotten Tomates Rating: No Rating Available");
            } else {
                console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
            }
        }       
        if (!err && response.statusCode === 200) {
            console.log("\n=======================\n");
            console.log("Movie Title: " + JSON.parse(body).Title);
            console.log("Year: " + JSON.parse(body).Year);
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
            movieRatings(); //Rotten Tomates Rating
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Actor(s): " + JSON.parse(body).Actors);
            console.log("Plot: " + JSON.parse(body).Plot);     
            console.log("\n=======================\n");       
        }
        if (!err && response.statusCode === 200) {
            fs.appendFile("log.txt", "\nYour last movie search was: " + JSON.parse(body).Title, function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Movie Info written to file");
                }
            });    
        }
    })
}
var doWhatItSays = function(searchInput) {
    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
            return console.log(err);
        }
        var outputArray = data.split(",");
        if (outputArray.length == 2) {
            select(outputArray[0], outputArray[1]);
        } else {
            select(outputArray[0]);
        }
    })
    console.log("Name: " + searchInput);
}

//User Selector
var select = function(caseInfo) {
    switch (caseInfo) {
        case "my-tweets":
            twitterCall();
            break;
        case "spotify-this-song":
            spotifyCall(searchInput);
            break;
        case "movie-this":
            omdbCall(searchInput);
            break;
        case "do-what-it-says":
            doWhatItSays();
            break;
        default:
            console.log("Unknown Selection, please try again!");
    }
} 
//Executes
var execute = function(arg1, arg2) {
    select(arg1, arg2);
}
//Take in user input
execute(process.argv[2], process.argv[3]);