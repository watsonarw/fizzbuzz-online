var chai = require('chai');
var chaiHttp = require('chai-http');

var { expect } = chai;

var app = require('./solve');

var SolveFizzBuzz = require('../../SolveFizzBuzz/SolveFizzBuzz');

chai.use(chaiHttp);

describe('API GET /solve/', () => {

  let path;

  context('with a range', () => {

    context('from -1000 to 1000', () => {

      beforeEach(() => {
        path = `/from/${first}/to/${last}`;
      });

      const first = -1000;
      const last = 1000;

      it('returns success', (done) => {
        chai.request(app)
          .get(path)
          .end((err, res) => {
            expect(res).to.have.status(200);
            done();
          });
      });

      it('returns FizzBuzz from 1 - 100 as a JSON array', (done) => {
        chai.request(app)
          .get(path)
          .end((err, res) => {
            expect(JSON.parse(res.text)).to.eql(SolveFizzBuzz(first, last));
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

    context('from fizz to buzz', () => {

      const first = 'fizz';
      const last = 'buzz';

      beforeEach(() => {
        path = `/from/${first}/to/${last}`;
      });

      it('has status 400', (done) => {
        chai.request(app)
          .get(path)
          .end((err, res) => {
            expect(res).to.have.status(400);
            done();
          });
      });

      it('has a clientError', (done) => {
        chai.request(app)
          .get(path)
          .end((err, res) => {
            expect(res.clientError).to.be.true;
            done();
          });
      });

      it('shows the error message', (done) => {
        chai.request(app)
          .get(path)
          .end((err, res) => {
            expect(JSON.parse(res.text)).to.eql({ error: `Invalid number: fizz` });
            done();
          });
      });

    });

  });

  context('without a range', () => {

    beforeEach(() => {
      path = '/';
    });

    it('returns success', (done) => {
      chai.request(app)
        .get(path)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('returns FizzBuzz from 1 - 100 as a JSON array', (done) => {
      chai.request(app)
        .get(path)
        .end((err, res) => {
          expect(JSON.parse(res.text)).to.eql(SolveFizzBuzz(1, 100));
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

});
