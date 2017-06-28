$(document).ready(function(){
// Define array
var characters = ["Buster Bluth", "Gob Bluth", "Tobias Funke"];
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
$("#buttons").on("click", ".character", function() {
    console.log($(this).text());
    var person = $(this).text();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&offset=4&api_key=dc6zaTOxFJmzC&limit=10";

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
            characterImage.attr("src", results[i].images.fixed_height_still.url);
            characterImage.attr("data-animate", results[i].images.fixed_height.url);
            characterImage.attr("data-state", "still");
            characterImage.attr("data-still", results[i].images.fixed_height_still.url);
            characterImage.addClass("gif");
            characterDiv.append(p);
            characterDiv.append(characterImage);
            $("#gifs").prepend(characterDiv);
        }
    });
});
// Form submission
$("#add-character").on("click", function(event){
    event.preventDefault();
    var addCharacter = $("#character-search").val().trim();
    characters.push(addCharacter);
    makeBtn(addCharacter);
});
// GIF pause/animate
$("#gifs").on("click", ".gif", function(){
    var state = $(this).attr("data-state");
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
});
});