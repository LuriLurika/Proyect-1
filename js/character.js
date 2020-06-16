class Character {

    constructor(ctx, imageW, imageH, posX, posY, name, keys, arrayWall, tileW, tileH, direction) {
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
        this.image.frames = 3
        this.image.framesIndex = 0

        this.keys = keys

        this.arrayWall = arrayWall

        this.tile = {
            w: tileW,
            h: tileH,
        }

        this.direction = direction

        this.setListener()

    }


    // PINTA PERSONAJE

    draw(framesCounter) {

        const framePacMan = this.image.frames
        const frameIndexPacMan = this.image.framesIndex
        const posPacManX = frameIndexPacMan * Math.floor(this.characterSize.w / framePacMan)
        const posPacManY = 0 //tenemos todos los sprites en una row
        this.ctx.drawImage(
            this.image,
            posPacManX, //SX coordenada de imagen
            posPacManY, //SY coordenada de imagen
            this.characterSize.w / framePacMan, //223 width que vamos a coger de la imagen
            this.characterSize.h, // altura que vamos a coger de la imagen
            this.characterPos.x * this.tile.w, //DX coordenada en la que pintamos
            this.characterPos.y * this.tile.h, // DY coordenada en que pintamos
            this.tile.w, //width que va a tener la imagen cuando la pintemosla imagen cuando la pintemos
            this.tile.h, //height que va a tener la imagen cuando lo pintemos 
        )
        this.animate(framesCounter)

    }



    animate(framesCounter) {

        if (framesCounter % 1 == 0) {
            this.image.framesIndex++;

        }
        if (this.image.framesIndex > this.image.frames - 1) {
            this.image.framesIndex = 0;
        }
    }




    move(arrayWall) {

        const nextMovement = {
            ...this.characterPos
        }
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
            ).length > 0) {} else {
            this.characterPos = nextMovement
            this.moveTunel()
        }
    }

    moveTunel() {
        const nextMovementTunel = {
            ...this.characterPos
        }

        if (nextMovementTunel.x++ === 18 && nextMovementTunel.y === 6) { //tunel derecha
            nextMovementTunel.x = 0
            nextMovementTunel.y = 6
            this.characterPos = nextMovementTunel
        } else if (nextMovementTunel.x-- === 0 && nextMovementTunel.y === 6) { //tunel izquierda
            nextMovementTunel.x = 18
            nextMovementTunel.y = 6
            this.characterPos = nextMovementTunel
        }

    }

    eatApple(arrayApple, onAppleEaten) {
        const apples = arrayApple.filter(elm =>
            elm.x === this.characterPos.x && elm.y === this.characterPos.y);
        if (apples.length > 0) {
            onAppleEaten(apples[0])
        }
    }

    eatIron(arrayIron, onIronEaten) {
        const ironhack = arrayIron.filter(elm =>
            elm.x === this.characterPos.x && elm.y === this.characterPos.y)
        if (ironhack.length > 0) {
            onIronEaten(ironhack[0])
        }
    }
    //


    setListener() {
        document.addEventListener("keydown", e => {
            switch (e.keyCode) {
                case this.keys.up:
                    this.direction = "up"
                    break;
                case this.keys.down:
                    this.direction = "down"
                    break;
                case this.keys.left:
                    this.direction = "left"
                    break;
                case this.keys.right:
                    this.direction = "right"
                    break;
            }
        });

    }













}