$(document).ready(function() {
  $("#click").submit(function(event) {
    var userInput = parseInt($("#input").val());
    var numberList = pingPong(userInput);
      $("#list").append("<li>" + numberList + "</li>")
  });
});

for (var i= 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("pingpong")
  }
  if (i % 5 === 0) {
    console.log("pong")
  }
  if (i % 3 === 0) {
    console.log("ping")
  }
}
