// old version in case new one messes up
// (working)
var x = prompt("what is x")
var calc = prompt("what is the calculation (use Math funcs and variable 'x')")
var roundnum = prompt("what do you need to round to?")
var y = x

function roundto(num, place) {
  return +(Math.round(num + `e+${place}`) + `e-${place}`);
}

for (var i = 0; i < 1; i--) {
  x = eval(calc)
  if (roundto(y, roundnum) == roundto(x, roundnum)) {
    console.log(roundto(x, roundnum))
    i = 2
  }
  y = x
  if (i < -1000) {
    i = 2
  }
}