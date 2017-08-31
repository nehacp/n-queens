/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = [];
  //if n = 1
  //start a for loop to create rows with rooks at unique position
  for(let i = 0; i < n; i++) {
    //create new array with 0s;
    var temp = new Array(n).fill(0);
    //place the rook at index i
    temp[i] = 1;
    //push to solution
    solution.push(temp);
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //debugger;
  var solutionCount = 0; //fixme
  //create nxn board
  var grid = new Board({n: n});
  var board = grid.attributes;
  var boardSize = grid.get('n');
  var rooks = n;
  var row = 0;
  console.log('n', n);

  function findPosition(row) {
    //iterate over board
    for(let i = 0; i < boardSize; i++) {
      //Check if board is valid
      board[row][i] = 1;
      //if placed no for loop.
      rooks--;
      if(grid.hasRowConflictAt(row) && grid.hasColConflictAt(i)) {
        board[row][i] = 0;
        rooks++;
        if(rooks === 0) {
          solutionCount++;
          board[row][i] = 0;
          rooks++;
          return;
        } else {
          findPosition(row + 1);
          board[row][i] = 0;
          rooks++;
        }
      }
    }
  }
  findPosition(row);
  //base case: index is creater than board size or number of rooks = n
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
