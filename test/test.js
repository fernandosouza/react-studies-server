//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const server = require('../index');

chai.use(chaiHttp);

describe('root', () => {
  it('should / path get request return 200', () => {
    return chai.request(server).get('/').then(response => {
      expect(response.statusCode).to.equal(200);
    })
  })
})

describe('topics', () => {
  it('should insert a topic', () => {
    return chai.request(server)
      .post('/topic')
      .type('form')
      .send({name: 'souza'})
      .then(response => {
        expect(response.statusCode).to.equal(200)
        expect(response.body[0].name).to.equal('souza')
      })
  })

  it('should return a list with topic', () => {
    return chai.request(server)
      .get('/topic')
      .then(response => {
        expect(response.statusCode).to.equal(200)
        expect(response.body).to.be.an('array');
      })
  })

  it('should return a list with topic that has NAME', () => {
    return chai.request(server)
      .post('/topic')
      .type('form')
      .send({ name: 'souza' })
      .then(() => {
        return chai.request(server)
          .get('/topic')
          .then(response => {
            expect(response.body[0]).to.have.property('name');
          })
      })
  })
})