class InvalidInput extends Error {
  constructor(input) {
    super(`Invalid input: ${input}`);
  }
}

module.exports = {
  InvalidInput
};
