const tiles = document.querySelectorAll('.box')

tiles.forEach(function (tile) {
    tile.addEventListener('click', clickTile)
})

function clickTile(tile) {
    tile.target.className = "opened"
}
