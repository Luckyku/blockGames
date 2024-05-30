const canvas = document.querySelector('canvas')
const board = canvas.getContext("2d")
canvas.width = DISPLAY_PIXEL.WIDTH * ASPECT_RATIO.WIDTH
canvas.height = DISPLAY_PIXEL.HEIGHT * ASPECT_RATIO.HEIGHT

const ground = new Ground('/assets/bg.jpg', canvas.width, canvas.height)
const player = new Player(playerProperty)
const enemy = new Player(enemyProperty)

function animate(){
    ground.create()
    player.create()
    // enemy.create()
    player.update()
    window.requestAnimationFrame(animate)
}

window.addEventListener('keydown', function (callback) {
    switch (callback.key) {
        case "ArrowUp":
            player.jump()
            break;
        case "ArrowRight":
            player.moveRight()
            break;
        case "ArrowLeft":
            player.moveLeft()
            break;

        default:
            break;
    }
})

animate()