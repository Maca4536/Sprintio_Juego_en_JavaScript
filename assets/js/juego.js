/*** Función: Números random ***/

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};


/*** Función: Evaluar letra ***/

const evaluarLetra = (letraFun, letraRandomFun) => {
    if(posicion1 < 10){
        if(letraFun == letraRandomFun){
            console.log("Letra correcta.");
            console.log("-----------------");
    
            posicion1 += 1;
            console.log(posicion2);
            pj1.style.gridColumn = posicion1 + "/" + (posicion1 + 1);
            console.log(pj1.style.gridColumn = posicion1 + "/" + (posicion1 + 1));
            console.log(posicion1);
    
            if(posicion1 < 10){
                letraRandomFun = randomNumber(minimo, maximo);
                console.log(`Letra generada: ${letraRandomFun}`);
                console.log("-----------------");
            }

            return letraRandomFun;
        }
    
        else{
            console.log("Letra incorrecta.");
            console.log("-----------------");
    
            if(posicion1 != 1){
                posicion1 -= 1;
                console.log(posicion2);
                pj1.style.gridColumn = posicion1 + "/" + (posicion1 + 1);
            }
            
            console.log(pj1.style.gridColumn = posicion1 + "/" + (posicion1 + 1));
            console.log(posicion1);
    
            letraRandomFun = randomNumber(minimo, maximo);
            console.log(`Letra generada: ${letraRandomFun}`);
            console.log("-----------------");

            return letraRandomFun;
        }
    }
    
}


/*** Función: Evaluar flecha ***/

const evaluarFlecha = (flechaFun, flechaRandomFun) => {
    if(posicion2 < 10){
        if(flechaFun == flechaRandomFun){
            console.log("Flecha correcta.");
            console.log("-----------------");
    
            posicion2 += 1;
            console.log(posicion2);
            pj2.style.gridColumn = posicion2 + "/" + (posicion2 + 1);
            console.log(pj2.style.gridColumn = posicion2 + "/" + (posicion2 + 1));
            console.log(posicion2);
    
            if(posicion2 < 10){
                flechaRandomFun = randomNumber(minimo, maximo);
                console.log(`Flecha generada: ${flechaRandomFun}`);
                console.log("-----------------");
            }
            
            return flechaRandomFun;
        }
    
        else{
            console.log("Flecha incorrecta.");
            console.log("-----------------");
            
            if(posicion2 != 1){
                posicion2 -= 1;
                pj2.style.gridColumn = posicion2 + "/" + posicion2 + 1;
            }
    
            console.log(pj2.style.gridColumn = posicion2 + "/" + (posicion2 + 1));
            console.log(posicion2);
    
            flechaRandomFun = randomNumber(minimo, maximo);
            console.log(`Flecha generada: ${flechaRandomFun}`);
            console.log("-----------------");
            
            return flechaRandomFun;
        }
    }
    
}

/*** Función: Evaluar ganador ***/

const evaluarGanador = () => {
    if(posicion1 == 10 || posicion2 == 10){
        if(posicion1 == 10){
             setTimeout(()=>{
                Swal.fire({
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    /* iconHtml: "https://cdn-icons-png.flaticon.com/512/1332/1332056.png", */
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


/*** Declaración de variables ***/

const minimo = 0;
const maximo = 4;
let letraRandom = randomNumber(minimo, maximo);
let flechaRandom = randomNumber(minimo, maximo);
let letra;
let flecha;
let teclaPresionada;
let pj1 = document.getElementById("PJ1");
let pj2 = document.getElementById("PJ2");
let posicion1 = 1;
let posicion2 = 1;


/*** Juego ***/

console.log(`Letra generada: ${letraRandom}`);
console.log("-----------------");
console.log(`Flecha generada: ${flechaRandom}`);
console.log("-----------------");

document.onkeyup = (event) => {
    teclaPresionada = event.key.toLowerCase();

    switch (teclaPresionada){
        case "w":
            console.log(teclaPresionada);
            letra = 0;
            console.log(letra);

            letraRandom = evaluarLetra(letra, letraRandom);
            break;
        
        case "a":
            console.log(teclaPresionada);
            letra = 1;
            console.log(letra);

            letraRandom = evaluarLetra(letra, letraRandom);
            break;
        
        case "s":
            console.log(teclaPresionada);
            letra = 2;
            console.log(letra);

            letraRandom = evaluarLetra(letra, letraRandom);
            break;
        
        case "d":
            console.log(teclaPresionada);
            letra = 3;
            console.log(letra);

            letraRandom = evaluarLetra(letra, letraRandom);
            break;
        
        case "arrowup":
            console.log(teclaPresionada);
            flecha = 0;
            console.log(flecha);

            flechaRandom = evaluarFlecha(flecha, flechaRandom);
            break;
        
        case "arrowleft":
            console.log(teclaPresionada);
            flecha = 1;
            console.log(flecha);
        
            flechaRandom = evaluarFlecha(flecha, flechaRandom);
            break;
        
        case "arrowdown":
            console.log(teclaPresionada);
            flecha = 2;
            console.log(flecha);
        
            flechaRandom = evaluarFlecha(flecha, flechaRandom);
            break;
        
        case "arrowright":
            console.log(teclaPresionada);
            flecha = 3;
            console.log(flecha);
        
            flechaRandom = evaluarFlecha(flecha, flechaRandom);
            break;
    }

    evaluarGanador();

}