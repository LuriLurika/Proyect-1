class Character {

    constructor(ctx, imageW, imageH, posX, posY, name, keys, arrayWall, direction) {
        this.ctx = ctx

        this.characterSize = {
            w: imageW,
            h: imageH
        }

        this.vel = 1

        this.characterPos = {
            x: posX,
            y: posY
        }

        this.image = new Image()
        this.image.src = `/img/${name}`
        this.image.frames = 2
        this.image.framesIndex = 1

        this.keys = keys

        this.arrayWall = arrayWall

        this.direction = 'undefined'

        this.setListener()

        this.setListener()

        //this.move()

    }


    // PINTA EN EL MAPA
    draw(framesCounter) {
        const framePacMan = this.image.frames
        const frameIndexPacMan = this.image.framesIndex
        const posPacManX = frameIndexPacMan * Math.floor(this.characterSize.w / framePacMan)
        const posPacManY = this.characterSize.h //frameIndexPacMan * Math.floor(this.imageH / framePacMan)

        this.ctx.fillStyle = "yellow"
        this.ctx.fillRect(
            this.characterPos.x * this.characterSize.w,
            this.characterPos.y * this.characterSize.h,
            this.characterSize.w,
            this.characterSize.h,

        )
        //this.animate(framesCounter)
    }



    animate(framesCounter) {
        if (framesCounter % 5 == 0) {
            this.image.framesIndex++;
        }
        if (this.image.framesIndex > this.image.frames - 1) {
            this.image.framesIndex = 0;
        }
    }

    /*stopLimit(arrayWall) {
        if(this.characterPos.x !== )
    }*/

    move(arrayWall) {
        const nextMovement = { ...this.characterPos }


        switch (this.direction) {
            case "up":
                nextMovement.y--
                break;
            case "down":
                nextMovement.y++
                break;
            case "left":
                nextMovement.x--
                break;
            case "right":
                nextMovement.x++
                break;
        }

        if (arrayWall.filter(elm => 
            elm.x === nextMovement.x && elm.y === nextMovement.y
        ).length > 0) {
            console.log("QUIETO PARAO")
        } else {
            this.characterPos = nextMovement
        }
    }

    
    setListener() {
        document.addEventListener("keydown", e => {
            switch (e.keyCode) {
                case this.keys.up:
                    this.direction = "up"
                    console.log(this.direction)
                    console.log("veteparriba")
                    break;
                case this.keys.down:
                    this.direction = "down"
                    console.log(this.direction)
                    console.log("vetepabajo")
                    break;
                case this.keys.left:
                    this.direction = "left"
                    console.log(this.direction)
                    console.log("vetepalaizquierda")
                    break;
                case this.keys.right:
                    this.direction = "right"
                    console.log(this.direction)
                    console.log("vetepaladerecha")
                    break;
            }
        });

    }













}