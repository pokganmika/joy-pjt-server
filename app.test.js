var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

describe('Basic Mocha String Test', function() {
  it('should return number of charachters in a string', function() {
    assert.equal('Hello'.length, 5);
  });
});
