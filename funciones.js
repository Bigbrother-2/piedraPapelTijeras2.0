// Funcion de comenzar el juego.
function iniciarJuego(){
    let iniciarElJueguito = document.getElementById("BotonSeleccionar")
    iniciarElJueguito.addEventListener("click", botonSeleccionar)

}

function botonSeleccionar(){
    let eleccionPiedra = document.getElementById("piedra")
    let eleccionPapel = document.getElementById("papel")
    let eleccionTijeras = document.getElementById("tijeras")
    let spanJugador = document.getElementById("seleccionJugador")
    
    if (eleccionPiedra.checked){
        alert("Has seleccionado Piedra")
        spanJugador.innerHTML="Piedra"
    } else if (eleccionPapel.checked){
        alert("Has selecionado Papel")
        spanJugador.innerHTML = "Papel"
    } else if (eleccionTijeras.checked){
        alert("Has seleccionado Tijeras")
        spanJugador.innerHTML = "Tijeras"
    } else {alert("No has seleccionado nada. Por favor seleciona una opción")}

    eleccionPC()
}

function eleccionPC(){
    let numeroRandom = eleccionRandom(1,3)
    let spanPC = document.getElementById("seleccionPC")
    if(numeroRandom == 1){
        alert("La PC escogió Piedra")
        spanPC.innerHTML = "Piedra"
    } else if(numeroRandom == 2){
        alert("La PC escogió Papel")
        spanPC.innerHTML = "Papel"
    } else if(numeroRandom == 3){
        alert("La PC escogió Tijeras")
        spanPC.innerHTML = "Tijeras"
    }
}

function eleccionRandom(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}



window.addEventListener("load", iniciarJuego)