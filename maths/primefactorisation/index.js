var primeFactorization = function primeFactorization(number, result) {
  var result = (result || []);
  var root = Math.sqrt(number);
  var x = 2;

  if (number % x) {
    x = 3;

    while ((number % x) && ((x = (x + 2)) < root)) { }
  }

  x = (x <= root) ? x : number;

  result.push(x);

  return (x === number) ? result : primeFactorization((number / x), result);
};

keepon = true

while (keepon == true) {
  var thenumber = prompt("What is the number? (press n to stop and c to clear)")
  if (thenumber == "c") {
    console.clear()
  } else if (thenumber == "n") {
    keepon = false
    break;
  } else {
    console.log(primeFactorization(thenumber))
  }
}