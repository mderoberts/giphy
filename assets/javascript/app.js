$(document).ready(function(){

var characters = ["Michael Bluth", "George Bluth", "Gob Bluth", "Lucielle Bluth", "Tobias Funke"];

function loadBtns(){
    for (var i = 0; i < characters.length; i++) {
        makeBtn(characters[i]);
    }
}

loadBtns();

function makeBtn(character) {
    var button = $("<button>");
    button.addClass("character");
    button.attr("data-name",character);
    button.text(character);
    $("#buttons").append(button);
}

$(".character").on("click", function() {
    var person = $(this).attr("data-name");
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

        var results = response.data;
    })
})



});