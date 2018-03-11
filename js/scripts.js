
//biz logic
function pingpong(userInput) {
  var arrayNumbers = [];
  for (var i = 1; i <= userInput; i++) {
    arrayNumbers.push(i);
  }

      for (var i = 0; i <arrayNumbers.length; i++) {
        var number = arrayNumbers[i];
        if ((number % 5 === 0) && (number % 3 === 0)) {
          arrayNumbers[i] = "ping-pong";
        } else if (number % 5 === 0) {
          arrayNumbers[i] = "pong";
        } else if (number % 3 === 0) {
          arrayNumbers[i] = "ping";
        }

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
