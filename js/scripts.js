
//biz logic
var pingpong = function(userInput) {
  var arrayNumbers = [];
  if (userInput > 0) {
      for (var i = 1; i <= userInput; i++) {
      arrayNumbers.push(i);
      }
      arrayNumbers. forEach(function(number) {
        if (number % 15 === 0) {
          arrayNumbers [number-1] = "ping-pong";
        } else if (i % 5 === 0) {
          arrayNumbers [number-1] = "pong";
        } else if (i % 3 === 0) {
          arrayNumbers [number-1] = "ping";
        }
      });
  }
  return arrayNumbers;
}

// UI logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#userInput").val();
    var showResults = function(arrayOutput) {
        $("ul#result").empty();
      arrayOutput.forEach(function(item) {
        $("ul#result").append('<li class="list-group-item">' + item +'</li>')
      });
      return;
    }

    showResults(pingpong(userInput))

  });
});
