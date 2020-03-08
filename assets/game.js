$(document).ready(function () {
    var topics = ["tennis", "soccer", "baseball", "basketball", "football"];
    renderButtons();


    function renderButtons () {
    $("#sportbuttons").empty();
    for (i = 0; i < topics.length; i++) {
        var button = $("<button>");
        button.attr("class", "btn btn-primary sportB");
        button.attr("data-sport", topics[i]);
        button.text(topics[i]);
        $("#sportbuttons").append(button);
    }

    $(".sportB").on("click", function() {
        $("#gifs").empty();
        var sport = $(this).attr("data-sport");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          sport + "&api_key=lPHmsdHCzhKDLregWToTRZAE6EIoPgFR&limit=5";
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
              if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                var gifDiv = $("<div>");
                var sportImage = $("<img>");
                sportImage.attr("src", results[i].images.fixed_height_still.url);
                sportImage.attr("data-still", results[i].images.fixed_height_still.url);
                sportImage.attr("data-animate", results[i].images.fixed_height.url);
                sportImage.attr("data-state", "still");
                sportImage.attr("class", "gif");

                gifDiv.append(sportImage);
                $("#gifs").prepend(gifDiv);
              }
            }
          });
        });

    };

    $("#newbtn").on("click", function(event) {
        event.preventDefault();
        var newsport = $("#newbutton").val().trim();
        topics.push(newsport);
        console.log(topics[i]);
        renderButtons();

    });

    $(document).on("click", ".gif", function() {
        var state = $(this).attr("data-state");
        var animate = $(this).attr("data-animate");
        var still = $(this).attr("data-still");

        if(state == "still") {
            $(this).attr("src", animate);
            $(this).attr("data-state", "animate");
        }

        else if(state == "animate") {
            $(this).attr("src", still);
            $(this).attr("data-state", "still");
        } 
    });

});