class Character {

    constructor(ctx, imageW, imageH, posX, posY, name, keys, arrayWall) {
        this.ctx = ctx

        this.imageW = imageW
        this.imageH = imageH

        this.vel = 1

        this.posX = posX
        this.posY = posY

        this.image = new Image()
        this.image.src = `/img/${name}`
        this.image.frames = 2
        this.image.framesIndex = 1

        this.keys = keys

        this.arrayWall = arrayWall

    }


    // PINTA EN EL MAPA
    draw(framesCounter) {
        const framePacMan = this.image.frames
        const frameIndexPacMan = this.image.framesIndex
        const posPacManX = frameIndexPacMan * Math.floor(this.imageW / framePacMan)
        const posPacManY = this.imageH //frameIndexPacMan * Math.floor(this.imageH / framePacMan)
        //console.log(`this.image ${this.image}`)
        //console.log(`posPacManX ${posPacManX}`)
        //console.log(`posPacManY ${posPacManY}`)
        //console.log(`this.imageH ${ this.imageH }`)
        //console.log(`this.imageW ${this.imageW}`)
        //console.log(`framePacMan ${framePacMan}`)
        //console.log(`this.posX ${this.posX}`)
        //console.log(`this.posY ${this.posY}`)
        //console.log(`frameIndexPacMan ${frameIndexPacMan}`)
        this.ctx.drawImage(this.image, 
             this.image, //objeto imagen
             posPacManX, // x coordenada a seleccionar
             posPacManY, //y coordeanda a seleccionar
             this.imageW / 2, //width del area a seleccionar
             this.imageH, //height del area a seleccionar
             this.posX, // x coordenada donde pintar
             this.posY, // y coordeanda a pintar
             this.imageW, // width de la imagen
             this.imageH //height de la imagen
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

    move(arrayWall) {
        if (this.posY < this.posY0) {
            this.posY += this.velY;
            this.velY += this.gravity;
        } else {
            this.posY = this.posY0;
            this.velY = 1;
        }
    }

    setListeners() {
        document.addEventListener("keydown", e => {
            switch (e.keyCode) {
                case this.keys.TOP:
                    if (this.posY >= this.posY0) {
                        this.jump()
                    }
                    break;
                case this.keys.SPACE:
                    this.shoot();
                    break;
            }
        });
    }


}