/*** Función: Números random ***/

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};


/*** Función: Timer (Juego) ***/

const timer = () => {
    div_timer.innerText = tiempo;
    tiempo--;

    if(div_timer.innerText == 1){
        setTimeout(() => {
            div_timer.innerText = "¡YA!";
            setTimeout(() => {
                div_fondo.remove();
                div_tecla.forEach(img => {
                    document.querySelector("main").appendChild(img);
                });
                juego();
            }, 1000);
        }, 1000);
    }
}

let intervalo = setInterval(() => {
    timer();

    if(tiempo == 0){
        clearInterval(intervalo);
    }
}, 1000);


/*** Función: Evaluar letra ***/

const evaluarLetra = (letraFun, letraRandomFun) => {
    if(posicion1 < 10){
        if(letraFun == letraRandomFun){
            posicion1 += 1;
            pj1.style.gridColumn = posicion1 + "/" + (posicion1 + 1);
    
            if(posicion1 < 10){
                letraRandomFun = randomNumber(minimo, maximo);
                imagenLetra(letraRandomFun);
            }

            return letraRandomFun;
        }
    
        else{
            if(posicion1 != 1){
                posicion1 -= 1;
                pj1.style.gridColumn = posicion1 + "/" + (posicion1 + 1);
            }
            
            letraRandomFun = randomNumber(minimo, maximo);
            imagenLetra(letraRandomFun);

            return letraRandomFun;
        }
    }
    
}


/*** Función: Evaluar flecha ***/

const evaluarFlecha = (flechaFun, flechaRandomFun) => {
    if(posicion2 < 10){
        if(flechaFun == flechaRandomFun){
            posicion2 += 1;
            pj2.style.gridColumn = posicion2 + "/" + (posicion2 + 1);
    
            if(posicion2 < 10){
                flechaRandomFun = randomNumber(minimo, maximo);
                imagenFlecha(flechaRandomFun);
            }
            
            return flechaRandomFun;
        }
    
        else{
            if(posicion2 != 1){
                posicion2 -= 1;
                pj2.style.gridColumn = posicion2 + "/" + (posicion2 + 1);
            }
    
            flechaRandomFun = randomNumber(minimo, maximo);
            imagenFlecha(flechaRandomFun);
            
            return flechaRandomFun;
        }
    }
    
}

/*** Función: Evaluar ganador ***/

const evaluarGanador = () => {
    if(posicion1 == 10 || posicion2 == 10){
        document.onkeyup = null;
        
        if(posicion1 == 10){
             setTimeout(()=>{
                Swal.fire({
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    title: "Ganador: Jugador 1\n¡Felicidades!",
                    text: "¿Qué deseas hacer?",
                    showDenyButton: true,
                    confirmButtonText: "Volver a jugar",
                    denyButtonText: `Ir al menú principal`
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                      window.location.reload();
                    } else if (result.isDenied) {
                      location.href = "../index.html"
                    }
                  });
            }, 500);
        }
    
        else{
            setTimeout(()=>{
                Swal.fire({
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    title: "Ganador: Jugador 2\n¡Felicidades!",
                    text: "¿Qué deseas hacer?",
                    showDenyButton: true,
                    confirmButtonText: "Volver a jugar",
                    denyButtonText: `Ir al menú principal`
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                      window.location.reload();
                    } else if (result.isDenied) {
                      location.href = "../index.html"
                    }
                  });
            }, 500);
        }
    }
}


/*** Función: Imagen letra ***/

const imagenLetra = (l) => {
    switch(l){
        case 0:
            imgLetra.setAttribute("src", "./assets/img/LetraW.png");
            break;
        
        case 1:
            imgLetra.setAttribute("src", "./assets/img/LetraA.png");
            break;
        
        case 2:
            imgLetra.setAttribute("src", "./assets/img/LetraS.png");
            break;
        
        case 3:
            imgLetra.setAttribute("src", "./assets/img/LetraD.png");
            break;
    }
}


/*** Función: Imagen flecha ***/

const imagenFlecha = (f) => {
    switch(f){
        case 0:
            imgFlecha.setAttribute("src", "./assets/img/FlechaArriba.png");
            break;
        
        case 1:
            imgFlecha.setAttribute("src", "./assets/img/FlechaIzq.png");
            break;
        
        case 2:
            imgFlecha.setAttribute("src", "./assets/img/FlechaAbajo.png");
            break;
        
        case 3:
            imgFlecha.setAttribute("src", "./assets/img/FlechaDer.png");
            break;
    }
}


/*** Declaración de variables ***/

const minimo = 0;
const maximo = 4;
let letraRandom;
let flechaRandom;
let letra;
let flecha;
let teclaPresionada;
let div_fondo = document.getElementById("fondo");
let div_timer = document.getElementById("timer");
let imgLetra = document.getElementById("letra");
let imgFlecha = document.getElementById("flecha");
let pj1 = document.getElementById("PJ1");
let pj2 = document.getElementById("PJ2");
let div_tecla = document.querySelectorAll(".tecla");
let posicion1 = 1;
let posicion2 = 1;
let tiempo = 3;


/*** Sacar imágenes de telcas ***/
div_tecla.forEach(img => {
    img.remove();
});


/*** Función: Juego ***/

const juego = () => {
    letraRandom = randomNumber(minimo, maximo);
    flechaRandom = randomNumber(minimo, maximo);

    imagenLetra(letraRandom);
    imagenFlecha(flechaRandom);

    document.onkeyup = (event) => {
        teclaPresionada = event.key.toLowerCase();

        switch(teclaPresionada){
            case "w":
                letra = 0;
                letraRandom = evaluarLetra(letra, letraRandom);
                break;
            
            case "a":
                letra = 1;
                letraRandom = evaluarLetra(letra, letraRandom);
                break;
            
            case "s":
                letra = 2;
                letraRandom = evaluarLetra(letra, letraRandom);
                break;
            
            case "d":
                letra = 3;
                letraRandom = evaluarLetra(letra, letraRandom);
                break;
            
            case "arrowup":
                flecha = 0;
                flechaRandom = evaluarFlecha(flecha, flechaRandom);
                break;
            
            case "arrowleft":
                flecha = 1;
                flechaRandom = evaluarFlecha(flecha, flechaRandom);
                break;
            
            case "arrowdown":
                flecha = 2;
                flechaRandom = evaluarFlecha(flecha, flechaRandom);
                break;
            
            case "arrowright":
                flecha = 3;
                flechaRandom = evaluarFlecha(flecha, flechaRandom);
                break;
        }

        evaluarGanador();
    }
}