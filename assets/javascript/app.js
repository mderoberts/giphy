$(document).ready(function(){

var characters = ["Michael Bluth", "George Bluth", "Gob Bluth", "Lucielle Bluth", "Tobias Funke"];

for (var i = 0; i < characters.length; i++) {

}

function makeBtn() {
    var button = $("<button>");
    $("#buttons").append(button);
}

$(".charBtn").on("click", function() {
    var person = $(this).attr("data-person");
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