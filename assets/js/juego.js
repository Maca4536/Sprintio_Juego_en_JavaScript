/*** Función: Números random ***/

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};


/*** Función: Evaluar letra ***/

const evaluarLetra = (letraFun, letraRandomFun) => {
    if(letraFun == letraRandomFun){
        console.log("Letra correcta.");
        console.log("-----------------");
        letraRandomFun = randomNumber(minimo, maximo);
        console.log(`Letra generada: ${letraRandomFun}`);
        console.log("-----------------");
        return letraRandomFun;
    }

    else{
        console.log("Letra incorrecta.");
        console.log("-----------------");
        console.log(letraRandomFun);
        return letraRandomFun;
    }
    
}


/*** Función: Evaluar flecha ***/

const evaluarFlecha = (flechaFun, flechaRandomFun) => {
    if(flechaFun == flechaRandomFun){
        console.log("Flecha correcta.");
        console.log("-----------------");
        flechaRandomFun = randomNumber(minimo, maximo);
        console.log(`Flecha generada: ${flechaRandomFun}`);
        console.log("-----------------");
        return flechaRandomFun;
    }

    else{
        console.log("Flecha incorrecta.");
        console.log("-----------------");
        console.log(flechaRandomFun);
        return flechaRandomFun;
    }
    
}


/*** Función: Evaluar letra ***/


/*** Declaración de variables ***/

const minimo = 0;
const maximo = 4;
let letraRandom = randomNumber(minimo, maximo);
let flechaRandom = randomNumber(minimo, maximo);
console.log(`Letra generada: ${letraRandom}`);
console.log("-----------------");
console.log(`Flecha generada: ${flechaRandom}`);
console.log("-----------------");
let letra;
let flecha;
let teclaPresionada;
let ganador = 0;


/*** Juego ***/

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
}