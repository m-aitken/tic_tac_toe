var player1 = "X";
var player2 = "O";
var currentPlayer = player1;
// var displayPlayer = document.querySelector('span').textContent;
var gridArray = [0,0,0,0,0,0,0,0,0]; // change element to X / O

var switchPlayer = function () {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else if (currentPlayer === player2) {
    currentPlayer = player1;
  }
};



// keep track of Current Player for display ie. if currentPlayer === player1 (true) display player 1 turn
// else display Player 2 turn 

var boxChange = function() {
  if (event.target.textContent === "") {
  event.target.textContent = currentPlayer;
  }
  // console.log(event.target.id);
  // console.log(event.target.id.slice(-1));
  var targetInd = event.target.id.slice(-1);
  gridArray[targetInd] = currentPlayer;
  winCheck();
  switchPlayer();
};

// event.target.id.slice(-1)
// returns box #
// store box # in variable
// array index # of box # = currentPlayer 


var winner = document.querySelector('.winner');
var winCheck = function () {
// if array indices === true for "x" or "o"
  if (gridArray[0] === "X" && gridArray[1] === "X" && gridArray[2] === "X") {
    // console.log('Player 1 wins!')
    winner.textContent = "Player One wins!";
  } else if (gridArray[0] === "O" && gridArray[1] === "O" && gridArray[2] === "O") {
    // console.log('Player 2 wins!');
    winner.textContent = "Player Two wins!";
    } else if (gridArray[3] === "X" && gridArray[4] === "X" && gridArray[5] === "X") {
      // console.log('Player 1 wins!')
      winner.textContent = "Player One wins!";
    } else if (gridArray[3] === "O" && gridArray[4] === "O" && gridArray[5] === "O") {
      // console.log('Player 2 wins!');
      winner.textContent = "Player Two wins!";
  } else if (gridArray[6] === "X" && gridArray[7] === "X" && gridArray[8] === "X") {
    // console.log('Player 1 wins!')
    winner.textContent = "Player One wins!";
  } else if (gridArray[6] === "O" && gridArray[7] === "O" && gridArray[8] === "O") {
    // console.log('Player 2 wins!');
    winner.textContent = "Player Two wins!";
    } else if (gridArray[0] === "X" && gridArray[3] === "X" && gridArray[6] === "X") {
      // console.log('Player 1 wins!')
      winner.textContent = "Player One wins!";
    } else if (gridArray[0] === "O" && gridArray[3] === "O" && gridArray[6] === "O") {
      // console.log('Player 2 wins!');
      winner.textContent = "Player Two wins!";
  } else if (gridArray[1] === "X" && gridArray[4] === "X" && gridArray[7] === "X") {
    // console.log('Player 1 wins!')
    winner.textContent = "Player One wins!";
  } else if (gridArray[1] === "O" && gridArray[4] === "O" && gridArray[7] === "O") {
    // console.log('Player 2 wins!');
    winner.textContent = "Player Two wins!";
    } else if (gridArray[2] === "X" && gridArray[5] === "X" && gridArray[8] === "X") {
        // console.log('Player 1 wins!')
        winner.textContent = "Player One wins!";
    } else if (gridArray[2] === "O" && gridArray[5] === "O" && gridArray[8] === "O") {
        // console.log('Player 2 wins!');
        winner.textContent = "Player Two wins!";
  } else if (gridArray[0] === "X" && gridArray[4] === "X" && gridArray[8] === "X") {
      // console.log('Player 1 wins!')
      winner.textContent = "Player One wins!";
  } else if (gridArray[0] === "O" && gridArray[4] === "O" && gridArray[8] === "O") {
    // console.log('Player 2 wins!');
    winner.textContent = "Player Two wins!";
    } else if (gridArray[2] === "X" && gridArray[4] === "X" && gridArray[6] === "X") {
      // console.log('Player 1 wins!')
      winner.textContent = "Player One wins!";
    } else if (gridArray[2] === "O" && gridArray[4] === "O" && gridArray[6] === "O") {
      // console.log('Player 2 wins!');
      winner.textContent = "Player Two wins!";
    }
};

var grid = document.querySelector('#grid');

grid.addEventListener('click', function(event) {
  if (event.target.className === 'box') {
    boxChange(event);
  }
});

