'use strict';

var mequal = require('multiple-equal');

var isAnagram = function() {
  var args = Array.prototype.slice.call(arguments);

  var maps = [];
  var createMap = function(char) {
    if (!this[char]) {
      this[char] = 0;
    }
    this[char]++;
  };

  args.forEach(function(singleString, index) {
    // remove all non alphanumeric characters
    // like spaces and aphostrophes
    singleString = singleString.replace(/[^azA-Z0-9]/gi, '').toLowerCase();
    maps[index] = {};
    singleString.split('').forEach(createMap.bind(maps[index]));
  });

  return mequal.apply(this, maps);
};

module.exports = isAnagram;
