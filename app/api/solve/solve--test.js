var chai = require('chai');
var chaiHttp = require('chai-http');

var { expect } = chai;

var app = require('./solve');

var SolveFizzBuzz = require('../../SolveFizzBuzz/SolveFizzBuzz');

chai.use(chaiHttp);

describe('API GET /solve/', () => {

  let path;

  context('without a range', () => {

    beforeEach(() => {
      path = '/';
    });

    it('returns success', () => {
      it('returns success', (done) => {
        chai.request(app)
          .get(path)
          .end((err, res) => {
            expect(res).to.have.status(200);
            done();
          });
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
