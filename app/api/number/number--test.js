var chai = require('chai');
var chaiHttp = require('chai-http');

var { expect } = chai;

var app = require('./number');

chai.use(chaiHttp);

describe('API GET /number/:number', () => {

  let path;

  context('with a number greater than 0', () => {

    let number;

    beforeEach(() => {
      number = parseInt(Math.random() * 999) + 1;
      path = `/${number}`;
    });

    it('returns success', (done) => {
      chai.request(app)
        .get(path)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it(`returns the FizzBuzz of the number`, (done) => {
      chai.request(app)
        .get(path)
        .end((err, res) => {
          expect(res.text).to.match(new RegExp(`^(${number}|"Fizz"|"Buzz"|"FizzBuzz")$`));
          done();
        });
    });

    it('has no errors', (done) => {
      chai.request(app)
        .get(path)
        .end((err, res) => {
          expect(err).to.be.null;
          done();
        });
    });

  });

  context('with 0', () => {

    beforeEach(() => {
      path = '/0';
    });

    it('has status 400', (done) => {
      chai.request(app)
        .get(path)
        .end((err, res) => {
          expect(res).to.have.status(400);
          done();
        });
    });

    it('has errors', (done) => {
      chai.request(app)
        .get(path)
        .end((err, res) => {
          expect(err).not.to.be.null;
          done();
        });
    });

    it('shows the error message', (done) => {
      chai.request(app)
        .get(path)
        .end((err, res) => {
          expect(JSON.parse(res.text)).to.eql({ error: 'Invalid number: 0' });
          done();
        });
    });

  });

  context('with something other than a number', () => {

    beforeEach(() => {
      path = '/FizzBuzz';
    });

    it('has status 400', (done) => {
      chai.request(app)
        .get(path)
        .end((err, res) => {
          expect(res).to.have.status(400);
          done();
        });
    });

    it('has errors', (done) => {
      chai.request(app)
        .get(path)
        .end((err, res) => {
          expect(err).not.to.be.null;
          done();
        });
    });

    it('shows the error message', (done) => {
      chai.request(app)
        .get(path)
        .end((err, res) => {
          expect(JSON.parse(res.text)).to.eql({ error: `Invalid number: FizzBuzz` });
          done();
        });
    });

  });

});
