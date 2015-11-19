/* There are three types of edits that can be performed on strings: insert, remove, or replace a character. Given two strings, write a function to test if to check if they are one edit (or zero edits) away.

My instinct is to loop through the second string, edit the first string at the first change, and then fail if there are any other changes.

This would be harder to do than I had anticipated, because you wouldn't know which kind of edit you'd be seeing, and that would make adjusting on the fly hard. The key here is to see that you know a lot from the length of the second string. If it's one greater, you look for insertion - one less, removal - the same, replacement.
*/

function isOneEdit(strA, strB) {

  if (strA.length === strB.length) { //replacement
    var replaceCount = 0;
    for (var i = 0; i < strA.length; i++) {
      if (strA[i] !== strB[i]) {
        replaceCount++;
      }
      if (replaceCount > 1) {
        return false;
      }
    }
  } else if ((strA.length - 1) === strB.length) {  //removal
    var removeCount = 0;
    var indexA = 0;
    var indexB = 0;
    for (var j = 0; j < strB.length; j++) {
      if (removeCount === 1 && strA[j] !== strB[j-1]) {
          return false;
        }

      if (removeCount === 0 && strA[j] !== strB[j]) {
        removeCount++;
      }

      if (removeCount > 1) {
        return false;
      }
    }
  } else if ((strA.length + 1) === strB.length) {  //insertion
      var insertCount = 0;
    for (var k = 0; k < strB.length; k++) {
      if (insertCount === 1 && strA[k] !== strB[k+1]) {
          return false;
        }

      if (insertCount === 0 && strA[k] !== strB[k]) {
        insertCount++;
      }

      if (insertCount > 1) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}

var strA = 'racecar';
var strB = 'pacecar';

console.log(isOneEdit(strA,strB));
