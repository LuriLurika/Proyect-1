// CLASE PARA CREAR CASILLAS

class Box {

    constructor(y, x, type) {
        this.y = y
        this.x = x
        this.type = type
    }

    //MÉTODO AUXILIAR PARA PINTAR LAS CAJITAS REDONDAS

    roundedRect(ctx, x, y, width, height, radius) {
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 7;

        //https://developer.mozilla.org/es/docs/Web/Guide/HTML/Canvas_tutorial/Dibujando_formas
        ctx.beginPath();
        ctx.moveTo(x, y + radius);
        ctx.lineTo(x, y + height - radius);
        ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
        ctx.lineTo(x + width - radius, y + height);
        ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
        ctx.lineTo(x + width, y + radius);
        ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
        ctx.lineTo(x + radius, y);
        ctx.quadraticCurveTo(x, y, x, y + radius);
        ctx.stroke();
    }


    // COLOR DE CADA CASILLA SEGÚN SU TIPO

    drawBox(ctx, canvasSize, image) {

        if (this.type === ('wall')) {
            //ctx.fillStyle = 'blue'   PARA QUE SE RELLENE FALTA PONER EL FILL() EN ROUNDRECT

            //ASÍ SE LLAMA AL MÉTODO DE LAS CAJITAS REDONDAS
            this.roundedRect(ctx,
                this.x * image.w,
                this.y * image.h,
                image.w,
                image.h,
                5);


        } else if (this.type === ('ghost')) {
            ctx.fillStyle = 'yellow'
        } else if (this.type === ('tunnel')) {
            ctx.fillStyle = 'green'
        } else {
            ctx.fillStyle = 'black'
        }
    }

}


// ARRAY DE CADA CASILLA

const arrBox = [

    /***LINEA 0***/

    new Box(0, 0, 'wall'),
    new Box(0, 1, 'wall'),
    new Box(0, 2, 'wall'),
    new Box(0, 3, 'wall'),
    new Box(0, 4, 'wall'),
    new Box(0, 5, 'wall'),
    new Box(0, 6, 'wall'),
    new Box(0, 7, 'wall'),
    new Box(0, 8, 'wall'),
    new Box(0, 9, 'wall'),
    new Box(0, 10, 'wall'),
    new Box(0, 11, 'wall'),
    new Box(0, 12, 'wall'),
    new Box(0, 13, 'wall'),
    new Box(0, 14, 'wall'),
    new Box(0, 15, 'wall'),
    new Box(0, 16, 'wall'),
    new Box(0, 17, 'wall'),

    /***LINEA 1***/

    new Box(1, 0, 'wall'),
    new Box(1, 1, 'ironhack'),
    new Box(1, 2, 'apple'),
    new Box(1, 3, 'apple'),
    new Box(1, 4, 'wall'),
    new Box(1, 5, 'apple'),
    new Box(1, 6, 'apple'),
    new Box(1, 7, 'apple'),
    new Box(1, 8, 'wall'),
    new Box(1, 9, 'wall'),
    new Box(1, 10, 'apple'),
    new Box(1, 11, 'apple'),
    new Box(1, 12, 'apple'),
    new Box(1, 13, 'wall'),
    new Box(1, 14, 'apple'),
    new Box(1, 15, 'apple'),
    new Box(1, 16, 'ironhack'),
    new Box(1, 17, 'wall'),

    /***LINEA 2***/

    new Box(2, 0, 'wall'),
    new Box(2, 1, 'apple'),
    new Box(2, 2, 'wall'),
    new Box(2, 3, 'apple'),
    new Box(2, 4, 'apple'),
    new Box(2, 5, 'apple'),
    new Box(2, 6, 'wall'),
    new Box(2, 7, 'apple'),
    new Box(2, 8, 'apple'),
    new Box(2, 9, 'apple'),
    new Box(2, 10, 'apple'),
    new Box(2, 11, 'wall'),
    new Box(2, 12, 'apple'),
    new Box(2, 13, 'apple'),
    new Box(2, 14, 'apple'),
    new Box(2, 15, 'wall'),
    new Box(2, 16, 'apple'),
    new Box(2, 17, 'wall'),

    /***LINEA 3***/

    new Box(3, 0, 'wall'),
    new Box(3, 1, 'apple'),
    new Box(3, 2, 'wall'),
    new Box(3, 3, 'wall'),
    new Box(3, 4, 'wall'),
    new Box(3, 5, 'apple'),
    new Box(3, 6, 'wall'),
    new Box(3, 7, 'apple'),
    new Box(3, 8, 'wall'),
    new Box(3, 9, 'wall'),
    new Box(3, 10, 'apple'),
    new Box(3, 11, 'wall'),
    new Box(3, 12, 'apple'),
    new Box(3, 13, 'wall'),
    new Box(3, 14, 'wall'),
    new Box(3, 15, 'wall'),
    new Box(3, 16, 'apple'),
    new Box(3, 17, 'wall'),

    /***LINEA 4***/

    new Box(4, 0, 'wall'),
    new Box(4, 1, 'apple'),
    new Box(4, 2, 'apple'),
    new Box(4, 3, 'wall'),
    new Box(4, 4, 'wall'),
    new Box(4, 5, 'apple'),
    new Box(4, 6, 'wall'),
    new Box(4, 7, 'apple'),
    new Box(4, 8, 'undefined'),
    new Box(4, 9, 'undefined'),
    new Box(4, 10, 'apple'),
    new Box(4, 11, 'wall'),
    new Box(4, 12, 'apple'),
    new Box(4, 13, 'wall'),
    new Box(4, 14, 'wall'),
    new Box(4, 15, 'apple'),
    new Box(4, 16, 'apple'),
    new Box(4, 17, 'wall'),

    /***LINEA 5***/

    new Box(5, 0, 'wall'),
    new Box(5, 1, 'wall'),
    new Box(5, 2, 'apple'),
    new Box(5, 3, 'wall'),
    new Box(5, 4, 'wall'),
    new Box(5, 5, 'apple'),
    new Box(5, 6, 'wall'),
    new Box(5, 7, 'wallGhost'),
    new Box(5, 8, 'wallGhost'),
    new Box(5, 9, 'wallGhost'),
    new Box(5, 10, 'wallGhost'),
    new Box(5, 11, 'wall'),
    new Box(5, 12, 'apple'),
    new Box(5, 13, 'wall'),
    new Box(5, 14, 'wall'),
    new Box(5, 15, 'apple'),
    new Box(5, 16, 'wall'),
    new Box(5, 17, 'wall'),

    /***LINEA 6***/

    new Box(6, 0, 'tunnel'),
    new Box(6, 1, 'apple'),
    new Box(6, 2, 'apple'),
    new Box(6, 3, 'apple'),
    new Box(6, 4, 'apple'),
    new Box(6, 5, 'apple'),
    new Box(6, 6, 'wall'),
    new Box(6, 7, 'wall'),
    new Box(6, 8, 'wall'),
    new Box(6, 9, 'wall'),
    new Box(6, 10, 'wall'),
    new Box(6, 11, 'wall'),
    new Box(6, 12, 'apple'),
    new Box(6, 13, 'apple'),
    new Box(6, 14, 'apple'),
    new Box(6, 15, 'apple'),
    new Box(6, 16, 'apple'),
    new Box(6, 17, 'tunnel'),

    /***LINEA 7***/

    new Box(7, 0, 'wall'),
    new Box(7, 1, 'wall'),
    new Box(7, 2, 'apple'),
    new Box(7, 3, 'wall'),
    new Box(7, 4, 'wall'),
    new Box(7, 5, 'pacman'),
    new Box(7, 6, 'apple'),
    new Box(7, 7, 'apple'),
    new Box(7, 8, 'apple'),
    new Box(7, 9, 'apple'),
    new Box(7, 10, 'apple'),
    new Box(7, 11, 'apple'),
    new Box(7, 12, 'apple'),
    new Box(7, 13, 'wall'),
    new Box(7, 14, 'wall'),
    new Box(7, 15, 'apple'),
    new Box(7, 16, 'wall'),
    new Box(7, 17, 'wall'),

    /***LINEA 8***/

    new Box(8, 0, 'wall'),
    new Box(8, 1, 'wall'),
    new Box(8, 2, 'apple'),
    new Box(8, 3, 'wall'),
    new Box(8, 4, 'wall'),
    new Box(8, 5, 'wall'),
    new Box(8, 6, 'wall'),
    new Box(8, 7, 'wall'),
    new Box(8, 8, 'apple'),
    new Box(8, 9, 'apple'),
    new Box(8, 10, 'wall'),
    new Box(8, 11, 'wall'),
    new Box(8, 12, 'wall'),
    new Box(8, 13, 'wall'),
    new Box(8, 14, 'wall'),
    new Box(8, 15, 'apple'),
    new Box(8, 16, 'wall'),
    new Box(8, 17, 'wall'),

    /***LINEA 9***/

    new Box(9, 0, 'wall'),
    new Box(9, 1, 'apple'),
    new Box(9, 2, 'apple'),
    new Box(9, 3, 'apple'),
    new Box(9, 4, 'wall'),
    new Box(9, 5, 'wall'),
    new Box(9, 6, 'apple'),
    new Box(9, 7, 'apple'),
    new Box(9, 8, 'apple'),
    new Box(9, 9, 'apple'),
    new Box(9, 10, 'apple'),
    new Box(9, 11, 'apple'),
    new Box(9, 12, 'wall'),
    new Box(9, 13, 'wall'),
    new Box(9, 14, 'apple'),
    new Box(9, 15, 'apple'),
    new Box(9, 16, 'apple'),
    new Box(9, 17, 'wall'),

    /***LINEA 10***/

    new Box(10, 0, 'wall'),
    new Box(10, 1, 'apple'),
    new Box(10, 2, 'wall'),
    new Box(10, 3, 'apple'),
    new Box(10, 4, 'apple'),
    new Box(10, 5, 'apple'),
    new Box(10, 6, 'apple'),
    new Box(10, 7, 'wall'),
    new Box(10, 8, 'wall'),
    new Box(10, 9, 'wall'),
    new Box(10, 10, 'wall'),
    new Box(10, 11, 'apple'),
    new Box(10, 12, 'apple'),
    new Box(10, 13, 'apple'),
    new Box(10, 14, 'apple'),
    new Box(10, 15, 'wall'),
    new Box(10, 16, 'apple'),
    new Box(10, 17, 'wall'),

    /***LINEA 11***/

    new Box(11, 0, 'wall'),
    new Box(11, 1, 'ironhack'),
    new Box(11, 2, 'apple'),
    new Box(11, 3, 'apple'),
    new Box(11, 4, 'wall'),
    new Box(11, 5, 'wall'),
    new Box(11, 6, 'apple'),
    new Box(11, 7, 'apple'),
    new Box(11, 8, 'apple'),
    new Box(11, 9, 'apple'),
    new Box(11, 10, 'apple'),
    new Box(11, 11, 'apple'),
    new Box(11, 12, 'wall'),
    new Box(11, 13, 'wall'),
    new Box(11, 14, 'apple'),
    new Box(11, 15, 'apple'),
    new Box(11, 16, 'ironhack'),
    new Box(11, 17, 'wall'),

    /***LINEA 12***/

    new Box(12, 0, 'wall'),
    new Box(12, 1, 'wall'),
    new Box(12, 2, 'wall'),
    new Box(12, 3, 'wall'),
    new Box(12, 4, 'wall'),
    new Box(12, 5, 'wall'),
    new Box(12, 6, 'wall'),
    new Box(12, 7, 'wall'),
    new Box(12, 8, 'wall'),
    new Box(12, 9, 'wall'),
    new Box(12, 10, 'wall'),
    new Box(12, 11, 'wall'),
    new Box(12, 12, 'wall'),
    new Box(12, 13, 'wall'),
    new Box(12, 14, 'wall'),
    new Box(12, 15, 'wall'),
    new Box(12, 16, 'wall'),
    new Box(12, 17, 'wall'),


]