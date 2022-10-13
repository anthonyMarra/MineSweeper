![wireFrame sketc here](IMG-1842.jpg)

## html:
h1 tag saying the game is minesweeper
add divs for the grid
add a button at the bottom that resets the grid
add a h3 timer to the right of the button
add a win and lose window


## css:
make the divs 14 by 18 grid
make the grid look clean
add cool soft colored background


## javascript
button refreshes the page

randomly sets up the board

once per secound, have a function that changes the timer on the screen by using the deltaTime() function, then updating the html h3 timer

add event listeners to all the divs in the grid using query selector

function whenClicked uncovers the tile by removing the css that was covering the tiles contents, and then calls the whichTypeOfTile function, and the win Function

function whichTypeOfTile determins the value of the tile by checking the divs value, and then calls different functions depending on that value (determined using if statments) (function bombTile, function emptyTile, function numberTile)

function bombTile uncovers all other bombs, and creates a new screen that tells the player they lost.  The divs with bombs will all have classes that specify if they are bombs, so it will be easy to determine with a for loop

function emptyTile, calls the whenClicked function on all other tiles that are adjacent to it

function numberTile displays the number of adjacent bombs next to the newly uncovered tile, by checking all the surrounding tiles and checking for the bomb class

function win checks if only bomb tiles remain on the board, and if true then pulls up a display window saying that the player has won, and displaying the time it took them to win.  Calls stopClock function

function stopCLock stops increasing the timer by setting a value to false which will then stop calling the timer function


## bonus points
plays a noise everytime you click a tile, and a different one for a bomb
some chill background music
a nav bar where you can go and play some other games (like the tictactoe that I already made), and mabye a suduku if I have time to make one