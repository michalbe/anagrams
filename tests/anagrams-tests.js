'use strict';

var assert = require('assert');
var anagrams = require('../');


var one = 'W czasie suszy szosa sucha';
var two = 'You ZZ as as whiz as success.';
var three = 'Ouch! Saw ass sizes saucy ZZ.';

assert(anagrams(one, two, three));
