var chai = require('chai');
var FizzBuzz = require('./FizzBuzz');

var InvalidNumber = require('../exceptions').InvalidNumber;

var { expect } = chai;

var shared = {
  isInput: (input) => {
    it(`when given ${input}, returns ${input}`, () => {
      expect(FizzBuzz(input)).to.eql(input);
    });
  },
  isFizz: (input) => {
    it(`when given ${input}, returns Fizz`, () => {
      expect(FizzBuzz(input)).to.eql('Fizz');
    });
  },
  isBuzz: (input) => {
    it(`when given ${input}, returns Buzz`, () => {
      expect(FizzBuzz(input)).to.eql('Buzz');
    });
  },
  isFizzBuzz: (input) => {
    it(`when given ${input}, returns FizzBuzz`, () => {
      expect(FizzBuzz(input)).to.eql('FizzBuzz');
    });
  },
  isError: (input) => {
    it(`when given ${input}, throws error`, () => {
      expect(() => { FizzBuzz(input) }).to.throw(InvalidNumber, `Invalid number: ${input}`);
    });
  }
};

describe('FizzBuzz', () => {
  shared.isFizzBuzz(0);
  shared.isInput(1);
  shared.isInput(2);
  shared.isFizz(3);
  shared.isInput(4);
  shared.isBuzz(5);
  shared.isFizz(6);
  shared.isInput(7);
  shared.isInput(8);
  shared.isFizz(9);
  shared.isBuzz(10);
  shared.isInput(11);
  shared.isFizz(12);
  shared.isInput(13);
  shared.isInput(14);
  shared.isFizzBuzz(15);
  shared.isInput(16);
  shared.isInput(17);
  shared.isFizz(18);
  shared.isInput(19);
  shared.isBuzz(20);
  shared.isFizz(21);
  shared.isInput(22);
  shared.isInput(23);
  shared.isFizz(24);
  shared.isBuzz(25);
  shared.isInput(26);
  shared.isFizz(27);
  shared.isInput(28);
  shared.isInput(29);
  shared.isFizzBuzz(30);
  shared.isError('');
  shared.isError(null);
  shared.isError(undefined);
  shared.isError('words');
});
