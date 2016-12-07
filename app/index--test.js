var chai = require('chai');
var chaiHttp = require('chai-http');

var { expect } = chai;

var app = require('./index');

chai.use(chaiHttp);

describe('/', () => {

  const path = '/'

  it('returns success', (done) => {
    chai.request(app)
      .get(path)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('says hello world', (done) => {
    chai.request(app)
      .get(path)
      .end((err, res) => {
        expect(res.text).to.eql('Hello World!');
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
