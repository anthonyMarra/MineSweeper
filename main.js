const tiles = document.querySelectorAll('.box')

tiles.forEach(function (tile) {
    tile.addEventListener('click', clickTile)
})
function addClass(elem, cls) {
    elem.className += (" " + cls);
}

function clickTile(tile) {
    tile.target.className = tile.target.className + " opened"
    console.log(tile.target.className)
}

