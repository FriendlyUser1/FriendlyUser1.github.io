function getPrimeFactors(integer) {
  const primeArray = [];
  let isPrime;

  // Find divisors starting with 2
  for (let i = 2; i <= integer; i++) {
    if (integer % i !== 0) continue;

    // Check if the divisor is a prime number
    for (let j = 2; j <= i / 2; j++) {
      isPrime = i % j !== 0;
    }

    if (!isPrime) continue;
    // if the divisor is prime, divide integer with the number and store it in the array
    integer /= i
    primeArray.push(i);
  }

  return primeArray;
}

istruee = true

while (istruee == true) {
  var theint = prompt("What number needs prime factors? (press n to stop and c to clear)")
  if (theint == "c") {
    console.clear()
  } else if (theint == "n") {
    istruee = false
    break;
  } else {
    console.log("The prime factors for " + theint + " are:\n" + getPrimeFactors(theint).join(', ') + "\n");
  }
}