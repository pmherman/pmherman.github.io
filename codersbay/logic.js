  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDpqLjswfy0dEpg_LQXMn-w7Al_xsRwbeM",
    authDomain: "test-project-602d9.firebaseapp.com",
    databaseURL: "https://test-project-602d9.firebaseio.com",
    projectId: "test-project-602d9",
    storageBucket: "test-project-602d9.appspot.com",
    messagingSenderId: "1066900602584"
  };
  firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
//var database = ...
  var database = firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    // highPrice = ...
    // highBidder = ...
    highPrice = parseInt(snapshot.val().highPrice);
    highBidder = snapshot.val().highBidder;

    // Change the HTML to reflect the stored values
    $("#highest-bidder").text(snapshot.val().highBidder);
    $("#highest-price").text(snapshot.val().highPrice);

    // Print the data to the console.
    console.log("Highest Price: " + snapshot.val().highPrice);
    console.log("Highest Bidder: " + snapshot.val().highBidder);

  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values
    $("#highest-bidder").text(highBidder);
    $("#highest-price").text(highPrice);

    // Print the data to the console.
    console.log("Initial Bidder: " + highBidder);
    console.log("Initial Bid: " + highPrice);

  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  var bidderPrice = parseInt($("#bidder-price").val().trim());
  var bidderName = $("#bidder-name").val().trim();

  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    database.ref().set({
      highBidder: bidderName,      
      highPrice: bidderPrice
    });

    // Log the new High Price
    console.log("New Bid: " + highPrice);

    // Store the new high price and bidder name as a local variable
    highBidder = bidderName;
    highPrice = parseInt(bidderPrice);

    // Change the HTML to reflect the new high price and bidder
    $("highest-bidder").text(highBidderd);
    $("highest-price").text(highPriced);

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
