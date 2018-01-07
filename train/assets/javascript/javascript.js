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

    var nextArrival = (moment(snapshot.val().firstArrival, 'HH:mm').add(snapshot.val().frequency, "m").format('hh:mm a'));

    console.log("Arrival Time: " + nextArrival);

    var minutesAway = moment(nextArrival, "HH:mm").toNow();

    console.log("Minutes Away: " + minutesAway);

    var newRow = $("<tr>");

    newRow.append("<td>" + snapshot.val().name + "</td> <td>" + snapshot.val().destination + "</td> <td>" + snapshot.val().frequency + "</td> <td>" + nextArrival + "</td> <td>" + minutesAway + "</td> <td> <button id='delete'>" + "Delete" + "</button> </td>" );

    $("#trainData").append(newRow);

  })