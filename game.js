var player1 = "X";
var player2 = "O";
var boxes = document.querySelectorAll('.box');
var currentPlayer = player1;
var displayPlayer = document.querySelector('span');
var gridArray = [0,0,0,0,0,0,0,0,0]; // change element to X / O

var switchPlayer = function () {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else if (currentPlayer === player2) {
    currentPlayer = player1;
  }
  displayPlayer.textContent = currentPlayer;
};

var boardReset = function() {
  gridArray = [0,0,0,0,0,0,0,0,0];
  winner.textContent = "";
  for (i=0; i<boxes.length; i++) {
    boxes[i] = boxes[i].textContent = ""
  }
  if (currentPlayer === player2) {
    displayPlayer.textContent = player1;
  }
};



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
  fullBoard();
};

// full board/tied game  "try again?"

var fullBoard = function() {
var fullArray = [];
  for (i=0; i<gridArray.length; i++) {
    if (gridArray[i] === "X" || gridArray[i] === "O") {
      fullArray.push(gridArray[i]);
    };
    if (fullArray.length === 9) {
      winner.textContent = "Another Game?";
    };
  };
  fullArray = [];
};


var winner = document.querySelector('.winner');
var winCheck = function () {
// if (i=0; i<gridArray.length; i++)
//   gridArray[i]

// if array indices === true for "x" or "o"
  if (gridArray[0] === "X" && gridArray[1] === "X" && gridArray[2] === "X") {
    winner.textContent = "Player One wins!";
  } else if (gridArray[0] === "O" && gridArray[1] === "O" && gridArray[2] === "O") {
    winner.textContent = "Player Two wins!";
    } else if (gridArray[3] === "X" && gridArray[4] === "X" && gridArray[5] === "X") {
      winner.textContent = "Player One wins!";
    } else if (gridArray[3] === "O" && gridArray[4] === "O" && gridArray[5] === "O") {
      winner.textContent = "Player Two wins!";
  } else if (gridArray[6] === "X" && gridArray[7] === "X" && gridArray[8] === "X") {
    winner.textContent = "Player One wins!";
  } else if (gridArray[6] === "O" && gridArray[7] === "O" && gridArray[8] === "O") {
    winner.textContent = "Player Two wins!";
    } else if (gridArray[0] === "X" && gridArray[3] === "X" && gridArray[6] === "X") {
      winner.textContent = "Player One wins!";
    } else if (gridArray[0] === "O" && gridArray[3] === "O" && gridArray[6] === "O") {
      winner.textContent = "Player Two wins!";
  } else if (gridArray[1] === "X" && gridArray[4] === "X" && gridArray[7] === "X") {
    winner.textContent = "Player One wins!";
  } else if (gridArray[1] === "O" && gridArray[4] === "O" && gridArray[7] === "O") {
    winner.textContent = "Player Two wins!";
    } else if (gridArray[2] === "X" && gridArray[5] === "X" && gridArray[8] === "X") {
        winner.textContent = "Player One wins!";
    } else if (gridArray[2] === "O" && gridArray[5] === "O" && gridArray[8] === "O") {
        winner.textContent = "Player Two wins!";
  } else if (gridArray[0] === "X" && gridArray[4] === "X" && gridArray[8] === "X") {
      winner.textContent = "Player One wins!";
  } else if (gridArray[0] === "O" && gridArray[4] === "O" && gridArray[8] === "O") {
    winner.textContent = "Player Two wins!";
    } else if (gridArray[2] === "X" && gridArray[4] === "X" && gridArray[6] === "X") {
      winner.textContent = "Player One wins!";
    } else if (gridArray[2] === "O" && gridArray[4] === "O" && gridArray[6] === "O") {
      winner.textContent = "Player Two wins!";
    }
};

var coin = document.querySelector('img');

coin.addEventListener('click', boardReset);

var grid = document.querySelector('#grid');

grid.addEventListener('click', function(event) {
  if (event.target.className === 'box') {
    boxChange(event);
  }
});