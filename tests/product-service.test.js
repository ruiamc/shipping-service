// tests/product-service.test.js
var chai = require('chai')
var expect = chai.expect
var productService = require('../src/services/product-service')
var nock = require('nock')

describe('Product service', function () {
  it('Should call remote service', async function () {
    nock('https://mycluster.icp:8899/products')
      .get('/13')
      .delayBody(10)
      .reply(200, {
        weightLB: 15.5,
        unit: 'lbs'
      })

    let weight = await productService.getProductWeight('13')
    expect(weight).to.equal(15.5)
  })
})
