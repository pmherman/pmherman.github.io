// Initialize Firebase
var config = {
  apiKey: "AIzaSyAl0KOdY5jAx-XpZ7bJuVq_UTt27354Xfc",
  authDomain: "rock-f2bb1.firebaseapp.com",
  databaseURL: "https://rock-f2bb1.firebaseio.com",
  projectId: "rock-f2bb1",
  storageBucket: "",
  messagingSenderId: "1014248527082"
};
firebase.initializeApp(config);

var database = firebase.database();

var player1;
var player2;

$("#nameSubmit").on("click", function() {
  if (player1 === "") {
    player1 = $("#nameInput").val().trim();
  } else {
    player2 = $("#nameInput").val.trim();
  }


  database.ref().push( {
    player1: player1,
    player2: player2
  });

})

database.ref().on("child_added", function(snapshot) {

  console.log("Player 1: " + snapshot.val().player1);
  console.log("Player 2: " + snapshot.val().player2);

})