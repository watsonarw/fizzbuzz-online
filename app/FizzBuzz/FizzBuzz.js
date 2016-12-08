var InvalidNumber = require('../exceptions').InvalidNumber;

function FizzBuzz(input) {

  const number = parseInt(input);

  if(isNaN(number)) {
    throw new InvalidNumber(input);
  }

  if(divisibleBy(15)) { return 'FizzBuzz'; }

  if(divisibleBy(3)) { return 'Fizz'; }

  if(divisibleBy(5)) { return 'Buzz'; }

  return number;

  function divisibleBy(divisor) {
    return number % divisor === 0
  }
}

module.exports = FizzBuzz;
