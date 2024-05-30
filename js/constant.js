const ASPECT_RATIO = {
    WIDTH : 16,
    HEIGHT : 9
}

const DISPLAY_PIXEL = {
    WIDTH : 64,
    HEIGHT: 64
}
const DISPLAY_CANVAS = {
    WIDTH: ASPECT_RATIO.WIDTH*DISPLAY_PIXEL.WIDTH,
    HEIGHT: ASPECT_RATIO.HEIGHT*DISPLAY_PIXEL.HEIGHT
}

const playerProperty = {
    width: 50,
    height: 50,
    speed: 2,
    color: 'tomato',
    position: {
        x: 0,
        y: DISPLAY_CANVAS.HEIGHT - 50   
    }
}
const enemyProperty = {
    width: 50,
    height: 50,
    speed: 1,
    color: 'black',
    position: {
        x: DISPLAY_CANVAS.WIDTH - 50,
        y: DISPLAY_CANVAS.HEIGHT - 50  
    }
}