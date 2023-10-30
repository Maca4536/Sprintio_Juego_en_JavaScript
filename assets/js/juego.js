const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const minimo = 0;
const maximo = 4;
let letraRandom = randomNumber(minimo, maximo);
let flechaRandom = randomNumber(minimo, maximo);
console.log(`Letra generada: ${letraRandom}`);
console.log(`Flecha generada: ${flechaRandom}`);
let letra;
let flecha;
let teclaPresionada;
let ganador = 0;

// do{
     document.onkeyup = (event) => {
        letraRandom = randomNumber(minimo, maximo);
        flechaRandom = randomNumber(minimo, maximo);
        teclaPresionada = event.key.toLowerCase();
    
        switch (teclaPresionada){
            case "w":
                console.log(teclaPresionada);
                letra = 0;
                console.log(letra);

                if(letra == letraRandom){
                    console.log("Letra correcta.");
                }
                break;
            
            case "a":
                console.log(teclaPresionada);
                letra = 1;
                console.log(letra);

                if(letra == letraRandom){
                    console.log("Letra correcta.");
                }
                break;
            
            case "s":
                console.log(teclaPresionada);
                letra = 2;
                console.log(letra);

                if(letra == letraRandom){
                    console.log("Letra correcta.");
                }
                break;
            
            case "d":
                console.log(teclaPresionada);
                letra = 3;
                console.log(letra);
                if(letra == letraRandom){
                    console.log("Letra correcta.");
                }
                break;
            
            case "arrowup":
                console.log(teclaPresionada);
                flecha = 0;
                console.log(flecha);

                if(flecha == flechaRandom){
                    console.log("Flecha correcta.");
                }
                break;
            
            case "arrowleft":
                console.log(teclaPresionada);
                flecha = 1;
                console.log(flecha);
            
                if(flecha == flechaRandom){
                    console.log("Flecha correcta.");
                }
                break;
            
            case "arrowdown":
                console.log(teclaPresionada);
                flecha = 2;
                console.log(flecha);
            
                if(flecha == flechaRandom){
                    console.log("Flecha correcta.");
                }
                break;
            
            case "arrowright":
                console.log(teclaPresionada);
                flecha = 3;
                console.log(flecha);
            
                if(flecha == flechaRandom){
                    console.log("Flecha correcta.");
                }
                break;
        }
    }
// }while(ganador == 0);