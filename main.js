const tiles = document.querySelectorAll('.box')

tiles.forEach(function (tile) {
    tile.addEventListener('click', clickTile)
})

function clickTile(tile) {
    tile.target.className = tile.target.className + " opened"
    console.log(tile.target.className)
}
console.log(Math.floor(Math.random() * 216) + 1)

function generateBombs() {
    for (let i = 0; i < 40; i++) {
        const rand = Math.floor(Math.random() * 216) + 1
        const row = "row" + Math.floor((rand / 18) + 1)
        const col = "col" + ((rand % 18) + 1)
        let tile = document.getElementsByClassName(row + " " + col)
        // tile[0].className = row + " " + col + " opened"
        console.log(tile[0].className)
        // console.log(tile[0].className.find("opened"))
        if (tile[0].className == "box " + col + " " + row + " opened") {
            i = i - 1
        } else {
            tile[0].className = tile[0].className + " opened"
        }
    }
    //40 random mines split bettween 216 tiles
}
generateBombs()