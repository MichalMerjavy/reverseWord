var rev = require('../lib/reverse.js');
var expect = require('chai').expect;


describe('Reverse word', function() {
    it('1dcBA should be abCD1', function() {
      var res = rev.reverseWord('1dcBA');
      var expected = "abCD1";
      expect(res).to.be.a('string');
      expect(res).to.equal(expected);
      expect(res).to.have.lengthOf(expected.length);
    });
  });
