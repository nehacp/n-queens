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
  var solutionCount = 0; //fixme
  //create nxn board
  var grid = new Board({n: n});
  var board = grid.attributes;
  var boardSize = grid.get('n');
  var rooks = n;

  function findPosition() {
    if(rooks === 0) {
      solutionCount++;
      return;
    }
    //iterate over board
    for(let i = 0; i < boardSize; i++) {
      //Check if board is valid
      findPosition(i);
      if(!grid.hasRowConflictAt(i) && !grid.hasColConflictAt(i)) {
        board[i][i] = 1
        rooks--;
      }
    }
  }
  findPosition();
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
