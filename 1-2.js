/* Given two strings, write a method to determine if one is a permutation of the other

My instinct is to sort them both and then loop through once. But this seems not that efficient. Check length first before anything.

This is, actually, probably the most elegant solution.
*/

function isPermutation(strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  }

  var strArrayA = strA.split("");  //converts string to array, allowing for sorting
  var strArrayB = strA.split("");  //converts string to array, allowing for sorting
  strArrayA.sort();
  strArrayB.sort();

  for (var i = 0; i < strA.length; i++) {
    if (strArrayA[i] !== strArrayB[i]) {
      return false;
    }
  }
  return true;
}

var strA = 'poppinbottles';
var strB = 'bottlesoppinp';

console.log(isPermutation(strA, strB));

/* However, if efficiency is critical, you can loop through one string creating an object that contains a character count, and then loop through the next string to verify that the character counts are equal.
*/

function isAlsoPermutation(strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  }

  var charCount = {};

  for (var i = 0; i < strA.length; i++) {
    if (charCount[strA[i]] === undefined) {
      charCount[strA[i]] = 1;
    } else {
      charCount[strA[i]]++;
    }
  }

  for (var j = 0; j < strB.length; j++) {
    if (charCount[strB[j]] === undefined) {
      return false;
    }

    charCount[strB[j]]--;

    if (charCount[strB[j]] < 0) {
      return false;
    }
  }
  return true;
}

var strC = 'poppinbottles';
var strD = 'bottlespopinp';

console.log(isAlsoPermutation(strC, strD));