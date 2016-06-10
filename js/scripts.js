
// Business Logic//
var pingPong = function(userInput){
var userInput = parseInt($("#input").val());
  for (var i= 1; i <= userInput; i++) {
    if (i % 15 === 0) {
      $("#list").append("<li class='blink'>P I N G P 0 N G!</li>")
    }
    else if (i % 5 === 0) {
      $("#list").append("<li class='blink'>P0NG!</li>")
    }
    else if (i % 3 === 0) {
      $("#list").append("<li class='blink'>PING!</li>")
    }
    else {
      $("#list").append("<li>" + i + "</li>")
    }
  }
}
///user Interface//

$(document).ready(function() {
  $("#inputform").submit(function(event) {
    event.preventDefault();
    $("#list").empty();
    pingPong();
  });
});



// Here is where I was trying to separate out the "append list" and move it to User interface (but failed)
// var pingPong = function(){
// var userInput = parseInt($("#input").val());
//   for (var i= 1; i <= userInput; i++) {
//     if (i % 15 === 0) {
//       result = "pingpong"
//     }
//     else if (i % 5 === 0) {
//       result = "pong"
//     }
//     else if (i % 3 === 0) {
//       result = "ping"
//     }
//     else {
//       result = i
//     }
//   }
//   return result;
// }
// ///user Interface//
//
// $(document).ready(function() {
//   $("#inputform").submit(function(event) {
//     event.preventDefault();
//     $("#list").empty();
//       pingPong().forEach($("#list").append("<li>" + result + "</li>"))
//     });
//   });
