/* Write an algorithm such that if an element in an MxN matrix is 0, its entire row an column are set to 0.

Book notes that you don't need to know the exact locations of where the zeros are - you only need to know which rows and which columns are going to be all zeros. You can go through the matrix once and store this information, and then use it to manipulate the matrix in the next step.

Wouldn't hurt to review later.
*/

function setZero() {

  var a = 1, b = 0;
  var matrix = [[1,0,1],[0,1,1],[1,1,1],[1,1,1]];
  var row = [false,false,false,false];
  var column = [false, false, false];
  var zeroRow = [0,0,0];

  for (var i = 0; i < row.length; i++) {
    for (var j = 0; j < column.length; j++) {
      if (matrix[i][j] === 0) {
        row[i] = true;
        column[j] = true;
      }
    }
  }

  for (var k = 0; k < matrix.length; k++) {
    if (row[k] === true) {
      matrix[k] = zeroRow;
    }
    for (var p = 0; p < matrix[0].length; p++) {
      if (column[p] === true) {
      matrix[k][p] = 0;
    }

  }

  }

  return matrix;
}

console.log(setZero());
