$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var snakes = $("input:radio[name=q1]:checked").val();
    var temp = $("#q2").val();
    var environment = $("#q3").val();
    var fun = $("#q4").val();
    var bevvy = $("#q5").val();

    if (snakes === "yes") {
      $(".result").hide();
      $("#kakadu").show();
    }

      else if (snakes !== "no" && fun === "crocodile" || snakes !== "no" && temp !== "cold" && environment === "desert") {
        $(".result").hide();
        $("#kakadu").show();
    }

      else if (bevvy === "wine" || fun === "wine") {
        $(".result").hide();
        $("#barossa").show();
    }

      else if (temp !== "cold" && environment === "coast" || temp !== "cold" && fun === "surf") {
        $(".result").hide();
        $("#gold").show();
    }

      else if (temp !== "cold" && fun === "hike") {
        $(".result").hide();
        $("#daintree").show();
    }

      else if (temp === "cold" || environment === "urban" && fun === "dining") {
        $(".result").hide();
        $("#melbs").show();
      }

      else {
        $(".result").hide();
        $("#daintree").show();
    }

  });
});
