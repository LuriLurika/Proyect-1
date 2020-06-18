const pantallaCarga = document.querySelector(".pantalla-carga")
const pantallaJuego = document.querySelector(".pantalla-juego")
const pantallaInicio = document.querySelector(".pantalla-inicio")

const logo = document.querySelector('#logo-juego')



function startGame() {

    //new Audio("mp3/theme.mp3").play()
    //Y la pantalla de carga aparece
    pantallaCarga.style.display = 'block'
    //Al clicar en start la pantalla inicio se esconde
    pantallaInicio.classList.add("notDisplayed")

    const svgMalingo = new Vivus('logo-juego', {
        duration: 550,
        animTimingFuction: Vivus.EASE,
    });

    //Con el setTimeOut se define el tiempo que tarda la pantalla juego
    setTimeout(function () {
        //Que se vea la pantalla de juego
        pantallaJuego.style.display = 'block'
        pantallaCarga.classList.add("notDisplayed")
        german.init('canvasGame')
        document.getElementById("party").style.display = 'flex'
        document.getElementById("canvasGame").style.display = 'none'
        countdown()
        hideParty()
    }, 4000)



    function hideParty() {
        setTimeout(function () {
            //Que se vea la pantalla de juego

            document.getElementById("party").style.display = 'none'
            document.getElementById("canvasGame").style.display = 'block'

        }, 5000)

    }
}

function countdown() {

    let time = 4
    let printTime = document.querySelector("#countdown")

    setInterval(() => {
        printTime.innerHTML = time--
        console.log(printTime)
        if (time < 0) {
            printTime.innerHTML = "GO! GO! GO!"
        }
    }, 800);

}
