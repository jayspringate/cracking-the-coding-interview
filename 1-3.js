/* Write a method to replace all spaces in a string with '%20'

In JavaScript, I think str.replace() can do this.

It can. Worth noting that it will only replace the first match once unless you add the 'g' (global) flag to the regex.
*/

function urlify (str) {
  return str.replace(/ /g, '%20');
}

var str = 'a b c ';

console.log(urlify(str));
