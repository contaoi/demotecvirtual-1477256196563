var rewire = require('rewire');
var chai = require('chai');
chai.use(require('chai-fs'));
var expect = chai.expect;
describe('My test suite', function() {
  beforeEach(function() {
  });
  afterEach(function() {
  });
  it('Test case', function(done) {
    expect('public/index.html').to.have.content.that.match(/Hello/, 'mensagem');
    done();
  });
});
