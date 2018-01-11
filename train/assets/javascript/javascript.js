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
    var currentTime = moment(new Date()),
        time = $("<h3 id='time' class='text-center'>"),
        update = function() {
           time.html("The Current Time is: " + moment().format("hh:mm:ss a"));
        };
        update();
        setInterval(update, 1000);
        autoRefresh = setInterval(function() {
          $("#currentTrainSchedule").load(firebase.database());
        }, 5000);

    $(".jumbotron").append(time);
  })


    $("#formSubmit").on("click", function(e) {
      e.preventDefault();
      var regEx = RegExp("^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$");

      name = $("#name-input").val().trim();
      destination = $("#destination-input").val().trim();
      frequency = $("#frequency-input").val().trim();
      firstArrival = $("#firstArrival-input").val().trim();

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
    
    newRow.append("<td>" + snapshot.val().name + "</td> <td>" + snapshot.val().destination + "</td> <td>" + numbersWithCommas(snapshot.val().frequency) + " Minutes</td> <td>" + moment(nextArrival).format("hh:mm a") + "</td> <td id = 'minutesAway'>" + numbersWithCommas(minutesAway) + " minutes" + "</td> <td> <button data-id='" + snapshot.key +"' class='delete'>" + "Delete" + "</button> </td>" );

    console.log("Key: " + snapshot.key);

    $("#trainData").append(newRow);

  })

  $(document).on("click", ".delete", function(e) {
    e.preventDefault();
    console.log($(this).attr("data-id"));
    database.ref().child($(this).attr("data-id")).remove();
    alert("Train Data has been deleted.");
    location.reload();
  });


