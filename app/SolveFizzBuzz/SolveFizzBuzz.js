const FizzBuzz = require('../FizzBuzz/FizzBuzz');

const InvalidNumber = require('../exceptions').InvalidNumber;

function SolveFizzBuzz(first, last) {
  let solution = [];
  const firstNumber = parseInt(first);
  const lastNumber = parseInt(last);

  if(isNaN(firstNumber)) { throw new InvalidNumber(first); }

  if(isNaN(lastNumber)) { throw new InvalidNumber(last); }


  for(let i = firstNumber; i <= lastNumber; i++) {
    solution.push(FizzBuzz(i));
  }

  return solution;
}

module.exports = SolveFizzBuzz
