  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBQlUCn770g5T64spwwh5SgnR5PdU-JZBM",
    authDomain: "trains-8e6f4.firebaseapp.com",
    databaseURL: "https://trains-8e6f4.firebaseio.com",
    projectId: "trains-8e6f4",
    storageBucket: "",
    messagingSenderId: "818093293590"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var name;
  var destination;
  var frequency;
  var firstArrival;
  var minAway;

  $(document).ready(function() {
    var currentTime = moment();

    var time = $("<p id='time' class='text-center'>");

    time.append("The Current Time is: " + moment().format("hh:mm:ss a"));

    $(".jumbotron").append(time);
  })

  $("#formSubmit").on("click", function() {
    name = $("#name-input").val().trim();
    destination = $("#destination-input").val().trim();
    frequency = $("#frequency-input").val().trim();
    firstArrival = $("#firstArrival-input").val().trim();

    database.ref().push({
      name: name,

      destination: destination,

      frequency: frequency,

      firstArrival: firstArrival,

      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

  })

  database.ref().on("child_added", function(snapshot) {

    console.log("Name: " + snapshot.val().name); 

    var firstArrivalConverted = moment(snapshot.val().firstArrival, "hh:mm").subtract(1, "years");

    console.log(moment(firstArrivalConverted).format("hh:mm"));

    var currentTime = moment();

    var diffTime = moment().diff(moment(firstArrivalConverted), "minutes");

    var remainder = diffTime % snapshot.val().frequency;

    var minutesAway = snapshot.val().frequency - remainder;

    var nextArrival = moment().add(minutesAway, "minutes");

    var newRow = $("<tr>");

    newRow.append("<td>" + snapshot.val().name + "</td> <td>" + snapshot.val().destination + "</td> <td>" + snapshot.val().frequency + " Minutes</td> <td>" + moment(nextArrival).format("hh:mm a") + "</td> <td>" + minutesAway + "</td> <td> <button data-id='" + snapshot.key +"' class='delete'>" + "Delete" + "</button> </td>" );

    console.log("Key: " + snapshot.key);

    $("#trainData").append(newRow);

  })

  $(document).on("click", ".delete", function(e) {
    e.preventDefault();
    console.log($(this).attr("data-id"));
    database.ref().child($(this).attr("data-id")).remove();
    location.reload();
  });

