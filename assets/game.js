$(document).ready(function () {
    var topics = ["tennis", "soccer", "baseball", "basketball", "football"];


    function renderButtons () {
    for (i = 0; i < topics.length; i++) {
        var button = $("<button>");
        button.attr("class", "btn btn-primary");
        button.attr("type", "submit");
        button.attr("value", "Submit");
        button.text(topics[i]);
        $("#sportbuttons").append(button);
    }
    };

    renderButtons();

    $("#newbtn").on("click", function(event) {
        event.preventDefault();
        var newsport = $("#newbutton").val().trim();
        topics.push(newsport);
        console.log(topics[i])
        renderButtons();

    });






}); 