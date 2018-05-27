const assert = require('assert')

const { queryString, allQueryStrings } = require('./index')

describe('Test query string parser functions', () => {
  describe('allQueryStrings', () => {
    it('should parse the query string to a object', () => {
      const intialData = '?a=1&b=2&c=3'
      const expectedData = { a: '1', b: '2', c: '3' }
      const result = allQueryStrings(intialData)
      assert.deepEqual(expectedData, result)
    })
    it('should add a ? if missing from string', () => {
      const intialData = 'a=1&b=2&c=3'
      const expectedData = { a: '1', b: '2', c: '3' }
      const result = allQueryStrings(intialData)
      assert.deepEqual(expectedData, result)
    })
    it('should return empty data if missing value in query string', () => {
      const intialData = '?a=1&b=&c=3'
      const expectedData = { a: '1', b: '', c: '3' }
      const result = allQueryStrings(intialData)
      assert.deepEqual(expectedData, result)
    })
    it('should decode uri encoded data', () => {
      const intialData = '?c=-%3D%2B%3F.%2C'
      const expectedData = { c: '-=+?.,' }
      const result = allQueryStrings(intialData)
      assert.deepEqual(expectedData, result)
    })
  })
  describe('queryString', () => {
    it('should get specific value from query string', () => {
      const intialData = '?a=1&b=2&c=3'
      const expectedData = '1'
      const result = queryString('a', intialData)
      assert.equal(expectedData, result)
    })
    it('should get undefined if no values', () => {
      const intialData = '?a=1&b=2&c=3'
      const expectedData = undefined
      const result = queryString('x', intialData)
      assert.equal(expectedData, result)
    })
  })
})
