$(document).ready(function() {
  $("#click").submit(function(event) {
    var userInput = $("#input").val();
    var numberList = pingpong(userInput);
      $("#list").append("<li>" + numberList + "</li>")
)
  });
});
