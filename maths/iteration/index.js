function iteration() {
  var x = document.getElementById("x").value;
  var calc = document.getElementById("calc").value;
  var roundnum = document.getElementById("roundnum").value;
  x = eval(calc)
  console.log("initial " + x)
  var y = x
  var output = document.getElementById("output");
  
  function roundto(value, decimals) {
    return parseFloat(value).toFixed(decimals)
    // return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  }

  try {
    for (var i = 0; i < 1; i--) {
      x = eval(calc)
      console.log(x)
      if (roundto(y, roundnum) == roundto(x, roundnum)) {
        output.innerHTML = roundto(x,roundnum)
        i = 2
      }
      y = x
      if (i < -1000) {
        i = 2
      }
    }
  } catch (e) {
    output.innerHTML = e
  }
}

function test() {
  var output = document.getElementById("output")
  output.innerHTML = "test"
}