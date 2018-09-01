//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;

describe('test', () => {
  it('should fail', () => {
    expect('a').to.equal('b');
  })
})