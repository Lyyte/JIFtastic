$(document).ready(function() {
var topics = ["tennis", "soccer", "baseball", "basketball", "football"];

for (i=0; i<topics.length; i++ ) {
    var button = $("<button>");
    button.attr("class", "btn btn-primary");
    button.attr("type", "submit");
    button.attr("value", "Submit");
    button.text(topics[i]);
    $("#sportbuttons").append(button);



   // <input class="btn btn-primary" type="submit" value="Submit"></input>



}
}); 