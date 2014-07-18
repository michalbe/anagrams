# anagrams by [@michalbe](http://github.com/michalbe) #
Check if multiple strings are [anagrams](http://en.wikipedia.org/wiki/Anagram)

### What? ###
White chars, special chars (like aphostrophes) are not taken into account when calculating anagrams. The function can gat as many parameters as needed.

### How? ###
Install it with:
```
npm install anagrams
```

and then...

```javascript
var anagrams = require('anagrams');

var one = 'W czasie suszy szosa sucha';
var two = 'You ZZ as as whiz as success.';
var three = 'Ouch! Saw ass sizes saucy ZZ.';

anagrams(one, two, three); // true
```
