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
  var grid = new Board({n: n});
  var board = grid.attributes;

  for(let i = 0; i < n; i++) {

    board[i][i] = 1;
    solution.push(board[i]);

  }
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  var solutionCount = 0;
  var grid = new Board({n: n});
  var board = grid.attributes;
  var size = grid.get('n');
  var rooks = {};

  var findSolutions = function(row) {

    for(let col = 0; col < size; col++) {
      if(rooks[col] === true) {
        continue;
      }
      board[row][col] = 1;
      if (row < size-1) {
        rooks[col] = true;
        findSolutions(row + 1);
      } else {
        solutionCount++;
        board[row][col] = 0;
        delete rooks[col];

        return;
      }

      board[row][col] = 0;
      delete rooks[col];
    }
  };

  findSolutions(0);
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = [];
  var grid = new Board({n: n});
  var board = grid.attributes;
  var size = grid.get('n');
  var queens = {};

  if (n === 2) {
    return [[], []];
  } else if (n === 3) {
    return [[], [], []];
  }

  var findSolution = function(row) {
    for (var col=0; col < size; col++) {
      if (queens[col]){
        continue;
      }
      board[row][col] = 1;
      queens[col] = true;
      if (grid.hasMajorDiagonalConflictAt(col-row) ||
          grid.hasMinorDiagonalConflictAt(row+col)) {
            board[row][col] = 0;
            delete queens[col];
            continue;
      }

      if (row < size-1) {
        findSolution(row+1);
      } else {
        var temp = [];
        for (var i=0; i < size; i++){
          temp.push(board[i].slice());
        }
        solution.push(temp);

        board[row][col] = 0;
        delete queens[col];
        return solution;
      }
      board[row][col] = 0;
      delete queens[col];
    }
  };

  findSolution(0);
  return solution.length ? solution[0] : solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  if(n === 0) { return 1; }
  var grid = new Board({n: n});
  var board = grid.attributes;
  var size = grid.get('n');
  var queens = {};

  var findSolution = function(row) {

    for (var col=0; col < size; col++) {
      
      if (queens['col-'+ col]){
        continue;
      }

      board[row][col] = 1;
      queens['col-' + col] = true;
      if (grid.hasMajorDiagonalConflictAt(col-row) ||
          grid.hasMinorDiagonalConflictAt(row+col)) {
            board[row][col] = 0;
            delete queens['col-' + col];
            continue;
      }

      if (row < size-1) {
        findSolution(row+1);
      } else {
        solutionCount++;
        board[row][col] = 0;
        delete queens['col-' + col];
        return;
      }
      board[row][col] = 0;
      delete queens['col-' + col];
    }
  };

  findSolution(0);
  return solutionCount;
};
