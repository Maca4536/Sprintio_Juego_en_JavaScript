/*** Declaración de variables ***/

const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const slider = document.getElementById("slider");
const sliderSection = document.querySelectorAll(".slider-section");
let contenedor_carrusel = document.getElementById("contenedor-carrusel");
let como_jugar = document.getElementById("como_jugar");
let aceptar = document.querySelectorAll(".aceptar");
let operacion = 0;
let widthImg = 100 / sliderSection.length;
let posicion = 0;

/*** Fumciones de las flechas ***/

const moveToLeft = () => {
    operacion -= widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease 0.5s";
    btnRight.className = "";
    posicion -=1;

    if(posicion == sliderSection.length - sliderSection.length){
        btnLeft.className = "deshabilitado";
    }
}

const moveToRight = () => {
    operacion += widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease 0.5s";
    btnLeft.className = "";
    posicion +=1;

    if(posicion == sliderSection.length - 1){
        btnRight.className = "deshabilitado";
    }
}

/*** Alerta Carrusel ***/

window.onload = () => {
    contenedor_carrusel.remove();
}

como_jugar.onclick = () => {
    document.querySelector("main").appendChild(contenedor_carrusel);
    if(posicion == sliderSection.length - sliderSection.length){
        btnLeft.className = "deshabilitado";
    }

    document.getElementById("grid").className = "deshabilitado";
}

btnLeft.onclick = (e) => {
    moveToLeft();
}

btnRight.onclick = (e) => {
    moveToRight();
}

aceptar.forEach(boton => {
    boton.onclick = () => {
        contenedor_carrusel.remove();
        document.getElementById("grid").className = "";
    }
});