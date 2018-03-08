// UI logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("input#number").val());
    var result = createArray(inputNumber);

    $("#result p").text(result);
    $("#result").show();
  });
});

//biz logic
