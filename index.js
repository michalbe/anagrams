'use strict';

var mequal = require('multiple-equal');

var isAnagram = function() {
  // Change arguments array-like-object to the regular array
  var args = Array.prototype.slice.call(arguments);

  // Create an array where we will store our char maps for every word
  var maps = [];

  // This function adds a char to the map. We refer to the map as `this`
  // because it really easy to change contect of it with binding other objects
  // to the funciton
  var createMap = function(char) {
    // If it's not in the map, it creates a new attribute initialized
    // with '0'
    if (!this[char]) {
      this[char] = 0;
    }
    // and increment the value
    this[char]++;
  };

  // Iterate thru the array of arguments of this function
  args.forEach(function(singleString, index) {
    // Remove all non alphanumeric characters like spaces and aphostrophes
    // using regular expressions and change all the letters to lowercase
    singleString = singleString.replace(/[^azA-Z0-9]/gi, '').toLowerCase();

    // create the new, empty object for our map.
    maps[index] = {};

    // Create and array form the string and iterate thru every char updating
    // the map for the given word
    singleString.split('').forEach(createMap.bind(maps[index]));
  });

  // Check if all the maps are deeply equivalent by applying the array as
  // arguments of mequal function
  return mequal.apply(this, maps);
};

module.exports = isAnagram;
