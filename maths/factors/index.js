function factors() {
  var final = []
  var output = document.getElementById("output")
  var num = document.getElementById("thenum").value
  if (num == "" || isNaN(num)) {
    output.innerHTML = ("You need to enter a number!")
    return
  }

  function getFactors(numb) {
    const isEven = numb % 2 === 0;
    const max = Math.sqrt(numb);
    const inc = isEven ? 1 : 2;
    if (numb == 1) return `The factor of 1 is: 1`;
    if (numb == 0) return `0 has no factors.`
    let factors = [1, numb];


    for (let curFactor = isEven ? 2 : 3; curFactor <= max; curFactor += inc) {
      if (numb % curFactor !== 0) continue;
      factors.push(curFactor);
      let compliment = numb / curFactor;
      if (compliment !== curFactor) factors.push(compliment);
    }
    return `The factors of ${numb} are: ${factors.join(", ")}`
  }

  output.innerHTML = getFactors(num)
}