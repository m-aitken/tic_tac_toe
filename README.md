## ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: Create a 'Tic Tac Toe' game

## Overview

As part of GA's Web Development Immersive course, the first project deliverable is a simple game of 'Tic Tac Toe' built using HTML, CSS and JavaScript.

---

# Requirements

* The game must be rendered in a browser
* Logic to show player turn switching
* Logic to show a player winning, and a visual display to show which player won
* Separate HTML, CSS and JavaScript files

---

# Game Instructions

Two players take turns clicking in the grid, assigning a marker, with Player One beginning first.
* Player One marker: " X "
* Player Two marker: " O "

The first player to successfully place 3 markers in a line, in any direction, wins the game. 
If the game grid is filled with no winner, the game can be reset and started again by clicking the 'coin' icon to the left.

To reset the game at any time, a user can click the 'coin' icon.

## Game Logic



## Future Improvements

* Simplify win condition code
* Implement images for player markers, e.g. missiles, asteroids.
* Implement image display for game end/player win condition (prompt to start new game) cover most of board.

## Known Issues

* Once a player has 'won' the game and the winner is displayed, users can continue to click empty grids and fill the board. The existing 'full board / tied game' prompt will then be displayed.
* Multiple player clicks in a box will cause the current player to switch.
