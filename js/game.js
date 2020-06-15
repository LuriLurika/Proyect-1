const german = {
    name: 'Ger-Man',
    description: 'Pacman Ironhacker',
    version: '1.0.0',
    author: 'Escarlata Fernandez & Laura Martínez',
    license: undefined,
    canvasDom: undefined,
    ctx: undefined,
    canvasSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },
    keys: undefined,

    //ARRAYS DE PILLS Y MUROS

    arrayApple: arrBox.filter(elm => elm.type === 'apple'),
    arrayIron: arrBox.filter(elm => elm.type === 'ironhack'),
    arrayWall: arrBox.filter(elm => elm.type === 'wall'),

    //MEDIDA PORCENTUAL DE CADA CASILLA

    image: {
        w: window.innerWidth / 18,
        h: window.innerHeight / 13,

    },
    character: undefined,
    framesCounter: 0,
    fps: 1,



    init(id) {
        this.setDimension(id)
        this.start()

    },

    //DIMENSIONES DEL MAPA

    setDimension(id) {
        this.canvasDom = document.getElementById(id)
        this.canvasDom.setAttribute('width', this.canvasSize.w)
        this.canvasDom.setAttribute('height', this.canvasSize.h)
        this.ctx = this.canvasDom.getContext('2d')
    },

    start() {

        this.reset(),
        this.drawAll()
            setInterval(() => {
                this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++
                this.clear()
                //this.drawAll()
            }, 1000 / this.fps)

    },

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    },


    drawAll() {

        //PINTAR CASILLAS
        arrBox.forEach(elm => {
            elm.drawBox(this.ctx, this.canvasSize, this.image)
        })

        //PINTAR MANZANAS EN SU CASILLA
        this.arrayApple.forEach(elm => {
            this.drawImage('apple.png', elm.y * this.image.h + 20, elm.x * this.image.w + 20, this.image.w - 40, this.image.h - 40)
        })

        //PINTAR LOGO IRONHACK EN SU CASILLA
        this.arrayIron.forEach(elm => {
            this.drawImage('ironhack.png', elm.y * this.image.h + 5, elm.x * this.image.w + 5, this.image.w - 10, this.image.h - 10)
        })

        //INTENTO DE PINTAR PACMAN
        this.character.draw(this.framesCounter)
        //this.drawFakePacman(7 * this.image.h + (this.image.h / 2), 5 * this.image.w - (this.image.w / 2), this.image.w - 10, this.image.h - 10)
        this.ctx.fillStyle = "yellow"
        this.ctx.fillRect(7 * this.image.h + (this.image.h / 2), 5 * this.image.w - (this.image.w / 2), this.image.w - 10, this.image.h - 10)

    },

    //PINTAR PACMAN EN SU POSICION INICIAL
    reset() {
        this.character = new Character(
            this.ctx,
            450,
            450,
            5,
            7,
            "pacman-2.png",
            this.keys,
            this.arrayWall
        )
    },

    drawFakePacman(posY, posX, w, h) {
        this.ctx.fillStyle = "yellow"
        this.ctx.fillRect(posY, posX, w, h)
    },



    //MÉTODOS DE APOYO PARA CARGAR IMÁGENES

    drawImage(name, posX, posY, w, h) {
        let image = new Image()
        image.src = `/img/${name}`
        image.onload = () => this.ctx.drawImage(image, posY, posX, w, h)
    },

}