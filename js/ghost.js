class Ghost {

    constructor(ctx, w, h, y, x, name, arrayWall, tileW, tileH, direction) {

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

        this.arrayWall = arrayWall

        this.tile = {
            w: tileW,
            h: tileH
        }

        this.direction = "up"

        this.vel = 1

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
            this.ghostPosition.x * this.tile.w,
            this.ghostPosition.y * this.tile.h,
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
       
        

    }

}