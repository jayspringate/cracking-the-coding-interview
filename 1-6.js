/* Implement a method to perform basic string compression using the counts of repeated characters. For example, aaabbcc becomes a3b2c2. If the compressed string is not shorter, the method should return the original string.

My instinct is to loop through the string with a count variable seeing if the character at i is equal to i + 1, pushing i if not, and incrementing the count if so

This actually is the simplest way to solve the problem, particularly in JavaScript with resizable arrays/strings.
*/

function stringCompress(str) {

  var compressed = '';
  var repeatCount = 1;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      repeatCount++;
    } else {
      compressed = compressed.concat(str[i], repeatCount);
      repeatCount = 1;
    }
  }

  if (compressed.length >= str.length) {
    return str;
  } else {
    return compressed;
  }
}

var str = 'aabbccc';

console.log(stringCompress(str));
