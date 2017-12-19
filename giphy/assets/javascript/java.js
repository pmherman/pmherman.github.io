var gifs = ["Star Trek", "DragonBall Z", "Code Geass", "Gundam Seed", "Family Guy", "Designated Survivor", "Gundam Wing", "The Originals", "Supergirl", "The Flash", "Legends of Tomorrow", "Big Bang Theory", "Fresh off the Boat", "Die Hard", "Castle", "Spiderman"];

//Creates the footer at the bottom of the page
function footer() {
	var foot = $("<footer>");

	foot.addClass("footer text-center");
	foot.html("<p>Copyright 2017. All Rights Reserved");

	$("body").append(foot);
}


function buttons() {

	for (var i = 0; i < gifs.length; i++){
		//creates the dynamic buttons based on the size of the array.
		var b = $("<buttons>");
		//Adds the clas of gifs and adds the attribute type and populates the text for the buttons
		b.addClass("gif-btn btn");
		b.attr("gif-type", gifs[i]);
		b.text(gifs[i]);
		//Places the generated buttons on the DOM
		$("#buttons").append(b);
	}
}
	//Adds additional buttons as needed for increased search results
	$("#buttonAdd").on("click", function(event) {
		event.preventDefault();

		var newGif = $("#buttonInput").val().trim();

		gifs.push(newGif);

		$("#buttons").empty();

		buttons();		
	})


	$(document).on("click", ".gif-btn.btn", function() {

		$("#gifs").empty();

		console.log("Clicked");

		var gifButton = $(this).attr("gif-type");
		//Holds the Giphy API information with a variable for the button
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifButton + "&api_key=dc6zaTOxFJmzC&limit=10";

		$.ajax({
			url: queryURL,
			method: "GET"
		})

		.done(function(response) {

			var results = response.data;

			//Creates the for loop that grabs the button names from the array.
			for (var i=0; i < results.length; i++) {
				if (results[i].rating !== "r") {
					//creates the gifDisplay div to house the giphy
					var gifDisplay = $("<div class='col-md-4'>");
					//grabs the rating
					var rating = results[i].rating;

					var p = $("<p>").text("Gif Rating: " + rating);

					var buttonImage = $("<img>");
					//creates the buttons and adds the class
					buttonImage.addClass("gifImage");
					//Default animated image
					buttonImage.attr("src", results[i].images.fixed_width_downsampled.url) ;
					buttonImage.attr("data-state", "animate");
					//Still image that can be called on click
					buttonImage.attr("data-still", results[i].images.fixed_width_still.url);
					buttonImage.attr("data-animate", results[i].images.fixed_width_downsampled.url);					
					//addes the gif to the DOM
					gifDisplay.html(p);
					gifDisplay.append(buttonImage);

					$("#gifs").prepend(gifDisplay);
				}
			}			

		});
		$(document).on("click", ".gifImage", function(){
			//creates the dynamic clicking event for stopping and starting the gif
			event.preventDefault();

			$(".gifImages").empty();

			var state = $(this).attr("data-state");

			if (state === "animate") {
				$(this).attr("src", $(this).attr("data-still"));
				$(this).attr("data-state", "still");
				console.log("still");
			} else if (state === "still") {
				$(this).attr("src", $(this).attr("data-animate"));
				$(this).attr("data-state", "animate");
				console.log("animate");
			}				
		})			

	})

//Calls my functions 	
buttons();
footer();


