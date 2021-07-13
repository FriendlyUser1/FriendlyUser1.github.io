function isprime() {
  var num = document.getElementById("thenum")

  function isPrime(numb) {
    for (var i = 2; i < numb; i++)
      if (numb % i === 0) return false;
    return numb > 1;
  }

  while (needvalidanswer == true) {
    var whatwant = prompt("Do you want a list [L] or specific number [N]?")
    whatwant = whatwant.toLowerCase()
    if (whatwant == "l") {
      needvalidanswer = false
      var listamount = prompt("What do you want the list to go up to?")
      for (var j = 0; j <= listamount; j++) {
        if (isPrime(j)) {
          console.log(j)
        }
      }
    } else if (whatwant == "n") {
      needvalidanswer = false
      while (havenumbers == true) {
        var whatnumber = prompt("What is the number? (enter n to stop and c to clear)")
        if (whatnumber == "n") {
          havenumbers = false
          break;
        } else if (whatnumber == "c") {
          console.clear()
        } else {
          havenumbers = true
        }
        if (isPrime(whatnumber)) console.log(`${whatnumber}`)
      }
    } else {
      needvalidanswer = true
    }
  }
}