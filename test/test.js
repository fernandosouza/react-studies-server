//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const server = require('../index');

chai.use(chaiHttp);

describe('root', () => {
  it('should / path get request return 404', () => {
    return chai.request(server).get('\/').then(response => {
      expect(response).to.have.status(404);
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
        expect(response).to.have.status(200);
        expect(response.body[0].name).to.equal('souza')
      })
  })

  it('should return a list with topic', () => {
    return chai.request(server)
      .get('/topic')
      .then(response => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.an('array');
      })
  })

  it('should return a list with topic that has NAME', () => {
    return chai.request(server)
      .get('/topic')
      .then(response => {
        expect(response).to.have.status(200);
        expect(response.body[0]).to.have.property('name');
      })
  })

  it('should delete a topic', () => {
    return chai.request(server)
      .get('/topic')
      .then(response => {
        return chai.request(server)
          .del('/topic')
          .send({ id: response.body[0]._id })
          .then(response => {
            expect(response).to.have.status(200);
            expect(response.body).to.have.property('ok', 1);
          })
      })
  })
})