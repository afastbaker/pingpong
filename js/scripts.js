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
var pingpong = function(input) {

  var output = "";
  for (var i = 1; i <= input; i++) {

    if (i % 15 === 0) {
      output += "ping-pong" + " ";
    } else if (i % 5 === 0) {
      output += "pong" + " ";
    } else if (i % 3 === 0) {
      output += "ping" + " ";
    } else {
      output += i + " ";
    }
  }

return output;
