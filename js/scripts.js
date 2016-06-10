$(document).ready(function() {
  $("#inputform").submit(function(event) {
    event.preventDefault();
      var userInput = parseInt($("#input").val());
      var numberList = pingPong();
        $("#list").append("<li>" + numberList + "</li>")
  });
});

var pingPong = function(){
  for (var i= 1; i <= 100; i++) {
    if (i % 15 === 0) {
      var output = "pingpong";
    }
    if (i % 5 === 0) {
      var output = "pong";
    }
    if (i % 3 === 0) {
      var output = "ping";
    }
  }
}
