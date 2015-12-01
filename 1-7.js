/* /* Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

I didn't really know how to go about this one. Book recommends simply transferring each edge to the next edge - i.e., transferring top edge to right edge (or left edge if counterclockwise), etc.

Keep in mind that you onlu have to rotate three characters per side for a 4x4 matrix - see book.
*/

function matrixRotate() {

  //this will rotate the outermost layer of the matrix counterclockwise - that is all that is shown. to rotate the entire matrix, you move to the inner layers and rotate until you've rotated the square that's 2x2 (where the edge length is 1).

  var top = ['t','o','p'];
  var bottom = ['b','o','t'];
  var left = ['l','e','f'];
  var right = ['r','i','g'];
  var edges = [top, right, bottom, left];
  var rotatedEdges = [];

  for (var i = 0; i < edges.length; i++) {
    var temp = edges[0];
    if (i === edges.length - 1) {
      rotatedEdges[i] = temp;
    } else {
      rotatedEdges[i] = edges[i+1];
    }
  }

  return rotatedEdges;
}

console.log(matrixRotate());
