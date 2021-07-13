function divisibleby() {
  var whadivbi = document.getElementById("whadivbi").value
  var numbers = document.getElementById("thenumbers").value
  numbers = numbers.split(",")
  var output = document.getElementById("output");
  var finished = []

  function hasDecimal(num) {
    var hasADecimal = true
    if (num % 1 == 0) {
      hasADecimal = false
    } else {
      hasADecimal = true
    }
    return hasADecimal;
  }
  
  for (var i = 0; i < numbers.length; i++) {
    var thing = numbers[i] / whadivbi
    if (hasDecimal(thing) !== true) {
      finished.push(numbers[i])
    }
  }

  output.innerHTML = finished
}