const tiles = document.querySelectorAll('.box')
let isBombsGenerated = false
let bombBoard = []
for (let i = 0; i < 216; i++) {
    bombBoard.push(false)
}
tiles.forEach(function (tile) {
    tile.addEventListener('click', clickTile)
})

function clickTile(tile) {

    if (tile.target.classList.contains("bomb")) {
        const bombs = document.querySelectorAll(".bomb");
        bombs.forEach(function (bomb) {
            bomb.style.backgroundColor = "red"
        })
    } else {
        tile.target.className = tile.target.className + " opened"
        checkForSuroundingBombs(tile)
    }

    if (!isBombsGenerated) {
        blankTile(tile)
        //this line might break the code by clicking and then clearing the entire board because every tile is blank since mines havent spawned in yet
        generateBombs()
        checkForSuroundingBombs(tile)
    }

}


function checkForSuroundingBombs(tile) {
    let numBombs = 0
    let row = tile.target.classList[2]
    row = row.substring(3);
    let col = tile.target.classList[1]
    col = col.substring(3);
    for (let y = -1; y < 2; y++) {
        for (let x = -1; x < 2; x++) {
            const rowNum = +row + +y
            const colNum = +col + +x
            if (colNum != 0 && colNum != 19 && rowNum != 0 && rowNum != 13) {
                const rowClass = "row" + rowNum
                console.log(rowClass)
                const colClass = "col" + colNum
                console.log(colClass)
                let checkedTile = document.getElementsByClassName(rowClass + " " + colClass)
                if (checkedTile[0].classList.contains("bomb")) {
                    numBombs = numBombs + 1
                }
            }
        }
    }
    if (numBombs == 0) {
        blankTile(tile)
    } else {
        tile.target.textContent = numBombs
    }
}
function blankTile(tile) {

}

function generateBombs() {
    for (let i = 0; i < 40; i++) {
        const rand = Math.floor(Math.random() * 216)
        const row = "row" + Math.floor((rand / 18) + 1)
        const col = "col" + ((rand % 18) + 1)
        let tile = document.getElementsByClassName(row + " " + col)
        if (tile[0].className == "box " + col + " " + row + " bomb" || tile[0].className == "box " + col + " " + row + " opened") {
            i = i - 1
        } else {
            tile[0].className = tile[0].className + " bomb"
            bombBoard[rand] = true
        }
    }
    isBombsGenerated = true
}

