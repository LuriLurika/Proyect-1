const german = {
        name: 'Ger-Man',
        description: 'Pacman Ironhacker',
        version: '1.0.0',
        author: 'Escarlata Fernandez & Laura Martínez',
        license: undefined,
        canvasDom: undefined,
        ctx: undefined,
        canvasSize: {
            w: window.innerWidth * 70 / 100,
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
        arrayWall: arrBox.filter(elm => elm.type === 'wall' || elm.type === 'wallGhost'),

        scoreApples: arrBox.filter(elm => elm.type === 'apple'),
        scoreIrons: arrBox.filter(elm => elm.type === 'ironhack'),

        //MEDIDA PORCENTUAL DE CADA CASILLA

        tile: {
            w: window.innerWidth * 70 / 100 / 18,
            h: window.innerHeight / 13,

        },

        image: {
            w: 750,
            h: 208,
        },

        ghostSize: {
            w: 910,
            h: 171,
        },

        direction: undefined,

        hearts: document.querySelectorAll(".heart"),
        max_life: 3,
        life: 0,
        score: 0,

        framesCounter: 0,
        fps: 30,

        pacmanStatus: 'normal',
        ironTime: 0,
        totalTime: 10,

        pacman: undefined,
        dayan: undefined,
        kike: undefined,
        laura: undefined,
        escarlata: undefined,


        sound_pill: new Audio("mp3/eat_ball.mp3"),
        sound_power_pill: new Audio('mp3/powerpill.mp3'),
        sound_die: new Audio('mp3/die.mp3'),
        sound_eatGhost: new Audio('mp3/eatghost.mp3'),



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


            this.interval = setInterval(() => {

                this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++
                this.clear()
                this.drawWall()
                this.drawPacman()
                this.drawPills()
                this.drawGhost()
                this.dayan.moveGhost()
                this.kike.moveGhost()
                this.laura.moveGhost()
                this.escarlata.moveGhost()
                this.checkGhostCollision() ? this.gameOver() : null
                                
            }, 8000 / this.fps)

        },

        clear() {
            this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
        },


        //PINTAR MUROS

        drawWall() {
            this.background = arrBox.forEach(elm => elm.drawBox(this.ctx, this.canvasSize, this.tile))
        },


        //CREAR PACMAN

        createPacman() {
            this.pacman = new Character(
                this.ctx,
                this.image.w,
                this.image.h,
                5,
                7,
                "pacman.png",
                this.keys,
                this.arrayWall,
                this.tile.w,
                this.tile.h,
                this.direction,
                newMov => {
                    this.dayan.addMovementToPath(newMov)
                    this.kike.addMovementToPath(newMov)
                    this.laura.addMovementToPath(newMov)
                    this.escarlata.addMovementToPath(newMov)
                    this.checkGhostCollision(newMov)

                }

            )
        },

        updateScore() {
            document.querySelector('#counter').innerText = this.score
        },


        //LLAMA A PINTAR PACMAN, LLAMAR MOVIMIENTO Y LLAMAR A COMER MANZANAS

        drawPacman() {

            this.pacman.move(this.arrayWall)
            this.pacman.draw(this.framesCounter)
            this.pacman.eatApple(this.arrayApple, appleEaten => {

                    this.arrayApple = [...this.arrayApple].filter(elm => {
                        return elm.x !== appleEaten.x || elm.y !== appleEaten.y
                    })


                this.sound_pill.volume = .03 
                this.sound_pill.play()

                // SUMAR 10 PUNTOS POR CADA MANZANA
                this.score += 10
                this.updateScore()

            })

        this.pacman.eatIron(this.arrayIron, ironEaten => {
            this.arrayIron = [...this.arrayIron].filter(elm => {
                return elm.x !== ironEaten.x || elm.y !== ironEaten.y
            })
             
                        
            // SUMAR 10 PUNTOS POR CADA IRONHACK
            this.score += 10
            this.updateScore()
            this.setterStatus('super')
            this.chronometer()
            this.sound_power_pill.volume = .03
            this.sound_power_pill.play()

        })

        if (this.arrayApple.length === 0 && this.arrayIron.length === 0) {
            setTimeout(function () {
                document.getElementById("pum").style.display = "flex"
                document.getElementById("canvasGame").style.display = "none"
            }, 2000)
            document.getElementById("pum").style.display = "none"
        }
    },


    //PINTAR MANZANAS Y LOGO IRONHACK EN SU CASILLA

    drawPills() {
        this.apple = this.arrayApple.forEach(elm => {
            this.drawImage('apple.png', elm.y * this.tile.h + 15, elm.x * this.tile.w + 15, this.tile.w - 30, this.tile.h - 30)

        })

        this.iron = this.arrayIron.forEach(elm => {
            this.drawImage('ironhack.png',
                elm.y * this.tile.h + 5,
                elm.x * this.tile.w + 5,
                this.tile.w - 10,
                this.tile.h - 10)
        })
    },


    // CREAR FANTASMAS DESDE LA CLASE GHOST

    createGhost() {
        this.arrayWall
        this.dayan = new Ghost(
            this.ctx,
            this.image.w,
            this.image.h,
            5,
            7,
            "ghost_sprites_rosa.png",
            arrayDayan,
            this.tile.w,
            this.tile.h,
            this.direction,
        )

        this.kike = new Ghost(
            this.ctx,
            this.image.w,
            this.image.h,
            5,
            8,
            "ghost_sprites_azul.png",
            arrayKike,
            this.tile.w,
            this.tile.h,
            this.direction,
        )

        this.laura = new Ghost(
            this.ctx,
            this.image.w,
            this.image.h,
            5,
            9,
            "ghost_sprites_rojo.png",
            arrayLaura,
            this.tile.w,
            this.tile.h,
            this.direction,
        )

        this.escarlata = new Ghost(
            this.ctx,
            this.image.w,
            this.image.h,
            5,
            10,
            "ghost_sprites_naranja.png",
            arrayEscarlata,
            this.tile.w,
            this.tile.h,
            this.direction,
        )
    },

    drawGhost() {
        this.dayan.draw(this.framesCounter, this.pacmanStatus)
        this.kike.draw(this.framesCounter, this.pacmanStatus)
        this.laura.draw(this.framesCounter, this.pacmanStatus)
        this.escarlata.draw(this.framesCounter, this.pacmanStatus)
    },


    //COLISIONES CON FANTASMAS

    checkGhostCollision() {
        if ((this.pacman.characterPos.x === this.dayan.getCurrentPosition().x) && (this.pacman.characterPos.y === this.dayan.getCurrentPosition().y) ||
            (this.pacman.characterPos.x === this.kike.getCurrentPosition().x) && (this.pacman.characterPos.y === this.kike.getCurrentPosition().y) ||
            (this.pacman.characterPos.x === this.laura.getCurrentPosition().x) && (this.pacman.characterPos.y === this.laura.getCurrentPosition().y) ||
            (this.pacman.characterPos.x === this.escarlata.getCurrentPosition().x) && (this.pacman.characterPos.y === this.escarlata.getCurrentPosition().y))

            if (this.pacmanStatus === 'super') {
                if ((this.pacman.characterPos.x === this.dayan.getCurrentPosition().x) && (this.pacman.characterPos.y === this.dayan.getCurrentPosition().y)) {
                    this.score += 100
                    this.updateScore()
                    this.dayan.reset()
                    this.sound_eatGhost.volume = .03
                    this.sound_eatGhost.play()
                }
                if ((this.pacman.characterPos.x === this.kike.getCurrentPosition().x) && (this.pacman.characterPos.y === this.kike.getCurrentPosition().y)) {
                    this.score += 100
                    this.updateScore()
                    this.kike.reset()
                    this.sound_eatGhost.volume = .03
                    this.sound_eatGhost.play()
                }
                if ((this.pacman.characterPos.x === this.laura.getCurrentPosition().x) && (this.pacman.characterPos.y === this.laura.getCurrentPosition().y)) {
                    this.score += 100
                    this.updateScore()
                    this.laura.reset()
                    this.sound_eatGhost.volume = .03
                    this.sound_eatGhost.play()
                }
                if ((this.pacman.characterPos.x === this.escarlata.getCurrentPosition().x) && (this.pacman.characterPos.y === this.escarlata.getCurrentPosition().y)) {
                    this.score += 100
                    this.updateScore()
                    this.escarlata.reset()
                    this.sound_eatGhost.volume = .03
                    this.sound_eatGhost.play()
                }

            } else {
                this.gameOver()
                document.getElementById("merluzo").style.display = 'flex'
                document.getElementById("canvasGame").style.display = 'none'
                this.sound_die.volume = .03
                this.sound_die.play()
                setTimeout(function () {
                    document.getElementById("merluzo").style.display = 'none'
                    document.getElementById("canvasGame").style.display = 'block'
                }, 3000)
            }
    },


    setterStatus(status) {
        this.pacmanStatus = status
    },

    gameOver() {
        clearInterval(this.interval)
        this.start()
        this.drawPills()
        this.life++
        if (this.life === 0 || this.life <= 3) {
            this.hearts[this.life - 1].classList.add("is-empty")
        } else if (this.life > 3) {
            this.hearts.forEach(elm => elm.classList.remove("is-empty"))
        }


        if (this.life === 4) {
            this.score = 0
            this.updateScore()
            this.life = 0
        }

    },



    chronometer() {
        document.getElementById('countdown2').innerHTML = this.totalTime;
        if (this.totalTime == 0) {
            this.totalTime = 10
            this.setterStatus('normal')

        } else {
            this.totalTime -= 1
            setTimeout(() => this.chronometer(), 1000)
        }
    },


    //PINTAR TODO EN SU POSICION INICIAL

    reset() {
        this.createPacman()
        this.drawWall()
        this.drawPills()
        this.createGhost()
        this.arrayApple = arrBox.filter(elm => elm.type === 'apple')
        this.arrayIron = arrBox.filter(elm => elm.type === 'ironhack')
        this.scoreApples = arrBox.filter(elm => elm.type === 'apple')
        this.scoreIrons = arrBox.filter(elm => elm.type === 'ironhack')
        this.updateScore()

    },

    //MÉTODO PARA CARGAR IMÁGENES. PARA CARGARLO FUERA NECESITA EMPEZAR LA RUTA CON ./

    drawImage(name, posX, posY, w, h) {
        let image = new Image()
        image.src = `./img/${name}`
        this.ctx.drawImage(image, posY, posX, w, h)
    },

}