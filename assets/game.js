$(document).ready(function () {
    var topics = ["tennis", "soccer", "baseball", "basketball", "football"];
    renderButtons();


    function renderButtons () {
    $("#sportbuttons").empty();
    for (i = 0; i < topics.length; i++) {
        var button = $("<button>");
        button.attr("class", "btn btn-primary sportB");
        button.attr("type", "submit");
        button.attr("value", "Submit");
        button.attr("data-sport", topics[i]);
        button.text(topics[i]);
        $("#sportbuttons").append(button);
    }
    };

    $("#newbtn").on("click", function(event) {
        event.preventDefault();
        var newsport = $("#newbutton").val().trim();
        topics.push(newsport);
        console.log(topics[i]);
        renderButtons();

    });

    $("sportB").on("click", function() {
        var sport = $(this).attr("data-sport");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          sport + "&api_key=lPHmsdHCzhKDLregWToTRZAE6EIoPgFRlimit=5";
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
              if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var sportImage = $("<img>");
                sportImage.attr("src", results[i].images.fixed_height.url);
                gifDiv.append(p);
                gifDiv.append(sportImage);
                $("#gifs").prepend(gifDiv);
              }
            }
          });
        });





        });