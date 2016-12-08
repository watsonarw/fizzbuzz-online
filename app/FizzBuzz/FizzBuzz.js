var InvalidInput = require('../exceptions').InvalidInput;

function FizzBuzz(input) {

  const number = parseInt(input);

  if(!number) {
    throw new InvalidInput(input);
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
