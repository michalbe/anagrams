var one = 'ccab cdae\'f';
var two = 'fabecadcc';

var isAnagram = function(first, second) {
  // remove all non alphanumeric characters
  // like spaces and aphostrophes
  first = first.replace(/[^azA-Z0-9]/gi, "");
  second = second.replace(/[^azA-Z0-9]/gi, "");

  var firstMap = {};
  var secondMap = {};

  var createMap = function(char) {
    if (!this[char]) {
      this[char] = 0;
    }
    this[char]++;
  }

  first.split('').forEach(createMap.bind(firstMap));
  second.split('').forEach(createMap.bind(secondMap));
  return Object.equals(firstMap, secondMap);
}
