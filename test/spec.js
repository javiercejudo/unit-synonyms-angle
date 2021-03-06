/*jshint node:true, mocha:true */

'use strict';

require('should');

var angle = require('../src/');
var units = angle.units;
var synonyms = angle.synonyms;

describe('angle units synonyms', function() {
  it('should be an objecct', function() {
    ({}.toString.call(synonyms)).should.equal('[object Object]');
  });

  it('should include synonyms for supported units only', function() {
    var unitsWithSynonyms = {};

    Object.keys(synonyms).forEach(function(unit) {
      unitsWithSynonyms[synonyms[unit]] = true;
    });

    unitsWithSynonyms.should.have.keys(units);
  });

  it('should have identity synonyms', function() {
    units.every(function(unit) {
      return synonyms[unit] === unit;
    }).should.be.exactly(true);
  });
});
