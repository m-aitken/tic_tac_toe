var player1 = "X";
var player2 = "O";
var boxes = document.querySelectorAll('.box');
var currentPlayer = player1; // game begins with Player One
var displayPlayer = document.querySelector('span');
var gridArray = [0,0,0,0,0,0,0,0,0]; // store  X / O changes in array

var switchPlayer = function () {      
  if (currentPlayer === player1) {    
    currentPlayer = player2;                  // swtich current player marker
  } else if (currentPlayer === player2) {
    currentPlayer = player1;
  }
  displayPlayer.textContent = currentPlayer;    // display new current player
};

var boardReset = function() {       // reset board state
  gridArray = [0,0,0,0,0,0,0,0,0];    // set logic array to original element values 
  winner.textContent = "";            // clear any winner text
  for (i=0; i<boxes.length; i++) {    // iterate through all box class, clear markers
    boxes[i] = boxes[i].textContent = ""
  }
  if (currentPlayer === player2) {
    displayPlayer.textContent = player1;    // reset to player1
  }
};

var boxChange = function() {          // user action in grid box
  if (event.target.textContent === "") {    // if box is empty
  event.target.textContent = currentPlayer; // insert current player marker
  }
  var targetInd = event.target.id.slice(-1);  // find target box id
  gridArray[targetInd] = currentPlayer;       // apply box id to game array as marker value(X/O)
  winCheck();            // call win condition check
  switchPlayer();        // switch player
  fullBoard();           // call full board check
  addImg()               // call add image function 
};

var addImg = function () {
  var img = document.createElement("img");      // create image tag
  event.target.appendChild(img)                 // append image tag to click target
  if (event.target.textContent === "X") {               
    img.setAttribute("src", "images/asteroid.gif"); // set image for player1 marker
  } else if (event.target.textContent === "O") {
    img.setAttribute("src", "images/rocket.gif");   // set image for player2 marker
  }
};

var fullBoard = function() {            // tied game/full board check
var fullArray = [];                     // empty logic array
  for (i=0; i<gridArray.length; i++) {  // iterate through game logic array
    if (gridArray[i] === "X" || gridArray[i] === "O") {
      fullArray.push(gridArray[i]);     // if array has X/O push into empty array
    };
    if (fullArray.length === 9) {       // if empty array length is max(9 boxes)
      winner.textContent = "Start new game?"; // display prompt for new game
    };
  };
  fullArray = [];     // restore empty array state
};
// future improvement: change out for game over image

var winner = document.querySelector('.winner');
var winCheck = function () {        // check possible win conditions and display winner

  if (gridArray[0] === "X" && gridArray[1] === "X" && gridArray[2] === "X") {
    return winner.textContent = "Player One wins!";
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
// future improvement: clearer win conditions + game over image

var coin = document.querySelector('img');
coin.addEventListener('click', boardReset);     // listen for click on coin img, call clear board function

var grid = document.querySelector('#grid');
grid.addEventListener('click', function(event) {  // listen for click in game grid, on a box class target, 
  if (event.target.className === 'box') {         // call player maker function
    boxChange(event);

  }
});