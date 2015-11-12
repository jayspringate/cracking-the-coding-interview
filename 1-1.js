/* Implement an algorithm to determine if a string has all unique characters.

My instinct here was to compare every item in the string to every other item, but this has O(n^2) complexity. If the string is ASCII, there would only be 128 character possibilities, so you could immediately return false if the string was longer than 128 characters, or as soon as any character was seen twice. Complexity here is either O(n) or arguably O(1), i.e., never more than 128.

code example here is further simplified to assume letters a-z only*/

function isUnique(str) {
  if (str.length > 26) {
    return false;
  }

  var alphabet = {};

  for (var i = 0; i < str.length; i++) {
    if (alphabet[str[i]]) {
      return false;
    } else {
      alphabet[str[i]] = true;
    }
  }
  return true;
}

var str = 'abcdefghity';

console.log(isUnique(str));

