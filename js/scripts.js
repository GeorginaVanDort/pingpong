var pingPong = function(userInput){
  var numArray = [];
    for (var i= 1; i <= userInput; i++) {
      if (i % 15 === 0) {
            numArray.push("<p class='blink'>P I N G P 0 N G!</p>")
      }
      else if (i % 5 === 0) {
            numArray.push("<p class='blink'>P 0 N G!</p>")
      }
      else if (i % 3 === 0) {
            numArray.push("<p class='blink'>P I N G!</p>")
      }
      else {
        numArray.push(i)
      }
    }
  return numArray;
}
///user Interface//

$(document).ready(function() {
  $("#inputform").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#input").val());
      $("#list").empty();
      var numArray = pingPong(userInput);

      numArray.forEach(function(entry){
        $("#list").append("<li>" + entry + "</li>");
      });
    });
  });
