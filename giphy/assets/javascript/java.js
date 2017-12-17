var gifs = ["Star Trek", "DragonBall Z", "Code Geass", "Gundam Seed", "Family Guy", "Designated Survivor"];

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
	$(document).on("click", ".gif-btn.btn", function() {

		$("#gifs").empty();

		console.log("Clicked");

		var gifButton = $(this).attr("gif-type");

		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifButton + "&api_key=dc6zaTOxFJmzC&limit=10";

		$.ajax({
			url: queryURL,
			method: "GET"
		})

		.done(function(response) {

			var results = response.data;

			for (var i=0; i < results.length; i++) {
				if (results[i].rating !== "r") {
					var gifDisplay = $("<div class='item'>");

					var rating = results[i].rating;

					var p = $("<p>").text("Gif Rating: " + rating);

					var buttonImage = $("<img>");

					buttonImage.attr("src", results[i].images.fixed_height.url);

					gifDisplay.html(p);
					gifDisplay.append(buttonImage);

					$("#gifs").prepend(gifDisplay);
				}
			}

		});

	})
buttons();
