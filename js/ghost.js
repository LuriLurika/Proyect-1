class Ghost {

    constructor(ctx, w, h, y, x, name, arrayGhost, tileW, tileH) {

        this.ctx = ctx

        this.ghostSize = {
            w: w,
            h: h
        }

        this.ghostPosition = {
            y: y,
            x: x
        }

        this.image = new Image()
        this.image.src = `/img/${name}`

        this.image.frames = 4
        this.image.framesIndex = 0

       
        this.tile = {
            w: tileW,
            h: tileH
        }

        this.index = 0

        this.vel = 0.3
        this.arrayGhost = arrayGhost

    }

    draw(framesCounter) {

        const frame = this.image.frames
        const framesIndex = this.image.framesIndex
        const posX = framesIndex * Math.floor(this.ghostSize.w / frame)
        const posY = 0 //todos los sprites en una row

        this.ctx.drawImage(
            this.image,
            posX,
            posY,
            this.ghostSize.w / frame,
            this.ghostSize.h,
            this.arrayGhost[this.index].x * this.tile.w,
            this.arrayGhost[this.index].y * this.tile.h,
            this.tile.w,
            this.tile.h,

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

    moveGhost() {
       
        this.index ++

    }

    addMovementToPath(newMov) {
        this.arrayGhost.push(newMov)
    }

}