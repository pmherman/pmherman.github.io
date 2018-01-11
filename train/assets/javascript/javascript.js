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

  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
  }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
  // ...
  });


  var name;
  var destination;
  var frequency;
  var firstArrival;
  var minAway;

  $(document).ready(function() {
    var currentTime = moment(new Date()),
        time = $("<h3 id='time' class='text-center'>"),
        //Allows for the time to be refreshed every second on the page to keep current time
        update = function() {
           time.html("The Current Time is: " + moment().format("hh:mm:ss a"));
        };
        update();
        setInterval(update, 1000);
    $(".jumbotron").append(time);

  })


    $("#formSubmit").on("click", function(e) {
      e.preventDefault();
      var regEx = RegExp("^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$");

      name = $("#name-input").val().trim();
      destination = $("#destination-input").val().trim();
      frequency = $("#frequency-input").val().trim();
      firstArrival = $("#firstArrival-input").val().trim();

      //Statement to check if the data inputted into the form is valid and the form is fully filled out before pushing to the database.
      if (name == "") {
        alert("Please Enter a valid Name!");
      } else if (destination == "") {
          alert("Please enter a vaild destination!");
        } else if (frequency == "") {
            alert("Please enter a valid frequency in minutes.");
        } else if (firstArrival == "") {
            alert("Please enter a valid First Arrival Time.")
        } else if (regEx.test(firstArrival) == false ) {
            alert ("PLease enter first arrival time in valid military format ( ex: 12:00 )");
        } else if (firstArrival.match(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)) {
         
            firebase.auth().signInWithPopup(provider);

            database.ref().push({
              name: name,

              destination: destination,

              frequency: frequency,

              firstArrival: firstArrival,

              dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
            alert("Train Information Uploaded Successfully");
            $("#train").each(function() {
              this.reset();
            })
      } 

    })


    

  database.ref().on("child_added", function(snapshot) {

    console.log("Name: " + snapshot.val().name); 

    var firstArrivalConverted = moment(snapshot.val().firstArrival, "hh:mm").subtract(1, "years");

    console.log(moment(firstArrivalConverted).format("hh:mm"));

    var currentTime = moment(),
        diffTime = moment().diff(moment(firstArrivalConverted), "minutes"),
        remainder = diffTime % snapshot.val().frequency,
        minutesAway = snapshot.val().frequency - remainder,
        nextArrival = moment().add(minutesAway, "minutes"),
        newRow = $("<tr>");

    //https://blog.tompawlak.org/number-currency-formatting-javascript
    function numbersWithCommas(number) {
      return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
    //posts the information to the Current Train Schedule table from the database
    newRow.append("<td>" + snapshot.val().name + "</td> <td>" + snapshot.val().destination + "</td> <td>" + numbersWithCommas(snapshot.val().frequency) + " Minutes</td> <td>" + moment(nextArrival).format("hh:mm a") + "</td> <td id = 'minutesAway'>" + numbersWithCommas(minutesAway) + " minutes" + "</td> <td> <button data-id='" + snapshot.key +"' class='delete'>" + "Delete" + "</button> </td>" );

    console.log("Key: " + snapshot.key);

    $("#trainData").append(newRow);

  })

  //Creates a dynamic listener that looks for what delete button is pressed and removes the appropiate entry from the table
  $(document).on("click", ".delete", function(e) {
    e.preventDefault();
    console.log($(this).attr("data-id"));
    database.ref().child($(this).attr("data-id")).remove();
    alert("Train Data has been deleted.");
    location.reload();
  });



