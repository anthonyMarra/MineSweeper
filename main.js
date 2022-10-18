const tiles = document.querySelectorAll('.box')
let isBombsGenerated = false

tiles.forEach(function (tile) {
    tile.addEventListener('click', clickTile)
})

function clickTile(tile) {

    if (tile.target.className == "box " + col + " " + row + " bomb") {
        //find out how to only look for the bomb class and see if it has it
        const bombs = document.querySelectorAll(".bomb");
        bombs.forEach(function (bomb) {
            bomb.style.backgroundColor = "red"
        })
    } else {
        tile.target.className = tile.target.className + " opened"
    }

    if (!isBombsGenerated) {
        generateBombs()
    }

}


function generateBombs() {
    for (let i = 0; i < 40; i++) {
        const rand = Math.floor(Math.random() * 216)
        const row = "row" + Math.floor((rand / 18) + 1)
        const col = "col" + ((rand % 18) + 1)
        let tile = document.getElementsByClassName(row + " " + col)
        // tile[0].className = row + " " + col + " opened"
        console.log(row + " " + col)
        console.log(tile[0].className)
        // console.log(tile[0].className.find("opened"))
        if (tile[0].className == "box " + col + " " + row + " bomb" || tile[0].className == "box " + col + " " + row + " opened") {
            i = i - 1
        } else {
            tile[0].className = tile[0].className + " bomb"
        }
    }
    //40 random mines split bettween 216 tiles
    isBombsGenerated = true
}

