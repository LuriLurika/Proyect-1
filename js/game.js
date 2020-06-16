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
    keys: {
        up: 38,
        down: 40,
        left: 37,
        right: 39
    },

    //ARRAYS DE PILLS Y MUROS

    arrayApple: arrBox.filter(elm => elm.type === 'apple'),
    arrayIron: arrBox.filter(elm => elm.type === 'ironhack'),
    arrayWall: arrBox.filter(elm => elm.type === 'wall'),

    //MEDIDA PORCENTUAL DE CADA CASILLA

    tile: {
        w: window.innerWidth / 18,
        h: window.innerHeight / 13,

    },

    image: {
        w: 446,
        h: 208,
    },

    direction: undefined,

    pacman: undefined,
    apple: undefined,
    iron: undefined,
    background: undefined,


    framesCounter: 0,
    fps: 60,



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

        this.reset()

        setInterval(() => {

            this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++
            this.clear()
            this.drawPacman()

        }, 10000 / this.fps)

    },

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    },

    //PINTAR CASILLAS

    drawWall() {
        this.background = arrBox.forEach(elm => {
            elm.drawBox(this.ctx, this.canvasSize, this.tile)
        })
    },

    drawPacman() {
        this.pacman.move(this.arrayWall)
        this.pacman.draw(this.framesCounter)

    },


    //PINTAR MANZANAS Y LOGO IRONHACK EN SU CASILLA

    drawPills() {

        this.apple = this.arrayApple.forEach(elm => {
            this.drawImage('apple.png', elm.y * this.tile.h + 20, elm.x * this.tile.w + 20, this.tile.w - 40, this.tile.h - 40)
        })



        this.iron = this.arrayIron.forEach(elm => {
            this.drawImage('ironhack.png',
                elm.y * this.tile.h + 5,
                elm.x * this.tile.w + 5,
                this.tile.w - 10,
                this.tile.h - 10)
        })
    },

    //PINTAR PACMAN EN SU POSICION INICIAL

    reset() {
        this.createPacman()
        this.drawWall()
        this.drawPills()
    },

    createPacman() {
        this.pacman = new Character(
            this.ctx,
            this.image.w,
            this.image.h,
            5,
            7,
            "pacman-2.png",
            this.keys,
            this.arrayWall,
            this.tile.w,
            this.tile.h,
            this.direction

        )
    },



    //MÉTODOS DE APOYO PARA CARGAR IMÁGENES

    drawImage(name, posX, posY, w, h) {
        let image = new Image()
        image.src = `/img/${name}`
        image.onload = () => this.ctx.drawImage(image, posY, posX, w, h)
    },



}