var chai = require('chai');
var SolveFizzBuzz = require('./SolveFizzBuzz');

var FizzBuzz = require('../FizzBuzz/FizzBuzz');
var InvalidNumber = require('../exceptions').InvalidNumber;

var { expect } = chai;

describe('SolveFizzBuzz', () => {

  context('with valid start and end numbers', () => {

    it('solves fizzbuzz for the range', () => {
      var arrayFromMinus500toPlus500 = Array.from({length: 1001}, (v, k) => k - 500);
      var expectedOutput = arrayFromMinus500toPlus500.map((number) => FizzBuzz(number));
      expect(SolveFizzBuzz(-500, 500)).to.eql(expectedOutput);
    });

  });

  context('with an invalid first number', () => {

    it('throws an invalid number error', () => {
      expect(() => { SolveFizzBuzz('not a number', 100) }).to.throw(InvalidNumber, `Invalid number: not a number`);
    });

  });

  context('with an invalid last number', () => {

    it('throws an invalid number error', () => {
      expect(() => { SolveFizzBuzz(0, null) }).to.throw(InvalidNumber, `Invalid number: null`);
    });

  });

});
