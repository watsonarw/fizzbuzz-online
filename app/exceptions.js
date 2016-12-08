class InvalidNumber extends Error {
  constructor(input) {
    super(`Invalid number: ${input}`);
  }
}

module.exports = {
  InvalidNumber
};
