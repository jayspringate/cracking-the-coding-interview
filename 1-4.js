/* Given a string, write a function to check if it is a permutation of a palindrome.

Okay, first we need to check to see if it could be a palindrome. My first instinct was that a palindrome will necessarily have an even character count of every character except the middle character, which will have an odd count - but this ignores palindromes with all even counts, such as 'paccap'. So need to account for those as well. I actually already was accounting for those, with the exception that at the end of the function, I was checking to see that oddCount equaled exactly one, when it can equal one (if length is odd) or zero (if length is even).
*/

function isPermutationOfPalindrome(strA) {

  var charCount = {};

  for (var i = 0; i < strA.length; i++) {
    if (charCount[strA[i]] === undefined) {
      charCount[strA[i]] = 1;
    } else {
      charCount[strA[i]]++;
    }
  }

  var oddCount = 0;

  for (var prop in charCount) {

    if ((charCount[prop] % 2) === 1) {
      oddCount++;
    }
    if (oddCount > 1) {
      return false;
    }
  }
  return true;
}

var strA = 'racecar';
var strB = 'paccap';

console.log(isPermutationOfPalindrome(strA));
console.log(isPermutationOfPalindrome(strB));