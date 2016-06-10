$(document).ready(function() {
  $("#inputform").submit(function(event) {
    event.preventDefault();
    pingPong();
  });
});

var pingPong = function(userInput){
var userInput = parseInt($("#input").val());

  for (var i= 1; i <= userInput; i++) {
    if (i % 15 === 0) {
      $("#list").append("<li>pingpong</li>")
    }
    if (i % 5 === 0) {
      $("#list").append("<li>pong</li>")
    }
    if (i % 3 === 0) {
      $("#list").append("<li>ping</li>")
    }
    else {
      $("#list").append("<li>" + i + "</li>")
    }
  }
}
