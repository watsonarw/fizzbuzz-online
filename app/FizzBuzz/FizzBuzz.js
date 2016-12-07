function FizzBuzz(input) {
    if(!input) {
      throw new Error("Invalid input");
    }

    if(divisibleBy(15)) { return 'FizzBuzz'; }

    if(divisibleBy(3)) { return 'Fizz'; }

    if(divisibleBy(5)) { return 'Buzz'; }

    return input;

  function divisibleBy(divisor) {
    return input % divisor === 0
  }
}

module.exports = FizzBuzz;
