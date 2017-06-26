$(document).ready(function(){
// Define array
var characters = ["George Bluth", "Gob Bluth", "Tobias Funke"];
// Load buttons from array
function loadBtns(){
    for (var i = 0; i < characters.length; i++) {
        makeBtn(characters[i]);
    }
}
loadBtns();
// Button maker
function makeBtn(character) {
    var button = $("<button>");
    button.addClass("character");
    button.attr("data-name",character);
    button.text(character);
    $("#buttons").append(button);
}
// Button event handler, assign API endpoint
$(".character").on("click", function() {
    var person = $(this).text();
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=dc6zaTOxFJmzC&limit=10";

    // AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .done(function(response) {
        console.log(queryURL);
        console.log(response);
        // Take response data and add new elements to DOM
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            var characterDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var characterImage = $("<img>");
            characterImage.attr("src", results[i].images.fixed_height.url);
            characterDiv.append(p);
            characterDiv.append(characterImage);
            $("#gifs").prepend(characterDiv);
        }
    })
})
});