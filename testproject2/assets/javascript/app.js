
// Source: https://www.youtube.com/watch?v=-vH2eZAM30s&t=298s Name: FSquare
function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}

//Uses the HTML form to get user entered information
$(function youTubeCall() {
    $("form").on("submit", function(e) {
       e.preventDefault();
       // prepare the request
       var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#searchInput").val()).replace(/%20/g, "+"),
            maxResults: 3,
            order: "viewCount",
       }); 
      // execute the request
       
       request.execute(function(response) {
        console.log("Response: " + response);
          var results = response.result;
          $("#results").html("");
          $.each(results.items, function(index, item) {
            $.get("assets/item.html", function(data) {
                $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
            });
          });
          resetVideoHeight();
       });
    });
    
    $(window).on("resize", resetVideoHeight);
});

// Source: https://www.youtube.com/watch?v=-vH2eZAM30s&t=298s Name: FSquare
function resetVideoHeight() {
    $(".video").css("height", $("#results").width() * 9/16);
}
//Initialize Google YouTube API Authorization
function init() {
    gapi.client.setApiKey("AIzaSyAwbv5Uageg_qwYxm898r4e4Eh5eEP6LjU");
    gapi.client.load("youtube", "v3", function() {
        // yt api is ready
    });
}