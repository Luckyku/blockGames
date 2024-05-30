class Player{
    constructor(props){
        this.width = props.width
        this.height = props.height
        this.color = props.color
        this.speed = props.speed
        this.position = {
            x: props.position.x,
            y: props.position.y
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.heightJump = 100
        this.gravity = 0.5

    }
    
    create(){
        board.fillStyle = this.color
        board.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    jump(){
            this.velocity.y = -Math.sqrt(2 * this.gravity * this.heightJump)
    }

    moveLeft(){
        this.velocity.x = - 1 * this.speed
    }
    moveRight(){
        this.velocity.x = + 1 * this.speed
    }

    update(){
        // if (this.position.x >= DISPLAY_CANVAS.WIDTH-this.width) {
        //     this.position.y -= this.velocity.y

        // } else {
            
        //     this.position.x += this.velocity.x
        // }
        const ground =  canvas.height - this.height
        const rightWall = canvas.width - this.width
        const leftWall = 0

        this.velocity.y += this.gravity
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        if(this.position.y > ground){
            this.position.y = ground
            player.jump()
        }
        if(this.position.x > rightWall){
            this.velocity.x += -1*this.speed
        }
        if(this.position.x < leftWall){
            this.velocity.x += 1*this.speed
        }
    }
}