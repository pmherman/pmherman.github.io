$(function() {
	$("form").on("submit", function(e) {
		e.preventDefault();

		var request = gapi.client.youtube.search.list( {
			part: "snippet",
			type: "video",
			q: encodeURIComponent($("#searchVid").val()).replace(/%20/g, "+"),
			maxResults: 5,
			order: "viewCount",			
		});

		request.execute(function(response) {
			var results = response.result;
			$.each(results.item, function(index, item) {
				$("#results").append(item.id.videoID+" "+item.snippet.title+"<br>");
			});
		});
	});
});

function init() {
	gapi.client.setAPIKey("AIzaSyAwbv5Uageg_qwYxm898r4e4Eh5eEP6LjU");
	gapi.client.load("youtube", "v3", function() {

	});
}