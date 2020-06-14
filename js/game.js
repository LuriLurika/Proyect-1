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

    //ARRAYS DE PILLS

    arrayApple: arrBox.filter(elm => elm.type === 'apple'),
    arrayIron: arrBox.filter(elm => elm.type === 'ironhack'),

    //MEDIDA PORCENTUAL DE CADA CASILLA

    image: {
        w: window.innerWidth / 18,
        h: window.innerHeight / 13,

    },


    init(id) {
        this.canvasDom = document.getElementById(id)
        this.canvasDom.setAttribute('width', this.canvasSize.w)
        this.canvasDom.setAttribute('height', this.canvasSize.h)
        this.ctx = this.canvasDom.getContext('2d')

        //PINTAR CASILLAS

        arrBox.forEach(elm => {
            elm.drawBox(this.ctx, this.canvasSize, this.image)
        })

        //PINTAR MANZANAS EN SU CASILLA

        this.arrayApple.forEach(elm => {
            this.drawImage('apple.png', elm.y * this.image.h + 20, elm.x * this.image.w + 20, this.image.w - 40, this.image.h - 40)
            console.log(this.image)
        })

        //PINTAR LOGO IRONHACK EN SU CASILLA

        this.arrayIron.forEach(elm => {
            this.drawImage('ironhack.png', elm.y * this.image.h + 5, elm.x * this.image.w + 5, this.image.w - 10, this.image.h - 10)
            console.log(this.image)
        })



    },

    //CARGAR IMÁGENES

    drawImage(name, posX, posY, w, h) {
        let image = new Image()
        image.src = `/img/${name}`
        image.onload = () => this.ctx.drawImage(image, posY, posX, w, h)
    }













}