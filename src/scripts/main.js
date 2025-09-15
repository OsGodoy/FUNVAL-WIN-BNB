/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { stays } from "./stays.js";

console.log(stays);

stays.forEach(lugares=>{
    
})

// botones mobile 

let botonBuscarMobile = document.querySelector("#botonBuscarMobile")
let modalBuscarMobile = document.querySelector("#modalBuscarMobile")
let cerrarBuscarMobile = document.querySelector("#cerrarBuscarMobile")

let botonCantidadInviMobile = document.querySelector("#botonCantidadInviMobile")
let cantidadInviMobile = document.querySelector("#cantidadInviMobile")
let botonLocacionMobile = document.querySelector("#botonLocacionMobile")
let selectLocacionMobile = document.querySelector("#selectLocacionMobile")

botonBuscarMobile.addEventListener("click", function(){
    if (modalBuscarMobile.classList.contains("hidden")){
        modalBuscarMobile.classList.replace("hidden","fixed")        
    }
})

cerrarBuscarMobile.addEventListener("click", function(){
    if (modalBuscarMobile.classList.contains("fixed")){
        modalBuscarMobile.classList.replace("fixed","hidden")
        cantidadInviMobile.classList.replace("opacity-100","opacity-0")
        selectLocacionMobile.classList.replace("opacity-100","opacity-0")
        cantidadInviMobile.classList.add("pointer-events-none")
        botonLocacionMobile.classList.replace("border-red-400","border-gray-100")
        botonCantidadInviMobile.classList.replace("border-red-400","border-gray-100")
    }
})

botonLocacionMobile.addEventListener("click",function(){
    if (selectLocacionMobile.classList.contains("opacity-0")){
        selectLocacionMobile.classList.replace("opacity-0","opacity-100")
        selectLocacionMobile.classList.remove("pointer-events-none")
        botonLocacionMobile.classList.replace("border-gray-100","border-red-400")
        botonCantidadInviMobile.classList.replace("border-red-400","border-gray-100")
        cantidadInviMobile.classList.replace("opacity-100","opacity-0")
        cantidadInviMobile.classList.add("pointer-events-none")
    }
})

botonCantidadInviMobile.addEventListener("click", function(){
    if (cantidadInviMobile.classList.contains("opacity-0")){
        cantidadInviMobile.classList.replace("opacity-0","opacity-100")
        cantidadInviMobile.classList.remove("pointer-events-none")
        selectLocacionMobile.classList.replace("opacity-100","opacity-0")
        botonCantidadInviMobile.classList.replace("border-gray-100","border-red-400")
        botonLocacionMobile.classList.replace("border-red-400","border-gray-100")
    }
})

// botones grandes

let botonBuscarGrande = document.querySelector("#botonBuscarGrande")
let modalBuscarGrande = document.querySelector("#modalBuscarGrande")

let botonCantidadInviGrande = document.querySelector("#botonCantidadInviGrande")
let cantidadInviGrande = document.querySelector("#cantidadInviGrande")
let botonLocacionGrande = document.querySelector("#botonLocacionGrande")
let selectLocacionGrande = document.querySelector("#selectLocacionGrande")

botonBuscarGrande.addEventListener("click",function(){
    if (modalBuscarGrande.classList.contains("hidden")){
        modalBuscarGrande.classList.replace("hidden","fixed")
    }
})

// cerrar
modalBuscarGrande.addEventListener("click",function(e){
    if (e.target === modalBuscarGrande){
        modalBuscarGrande.classList.replace("fixed","hidden")
        selectLocacionGrande.classList.replace("opacity-100","opacity-0")
        selectLocacionGrande.classList.add("pointer-events-none")
        cantidadInviGrande.classList.replace("opacity-100","opacity-0")
        cantidadInviGrande.classList.add("pointer-events-none") 
        botonLocacionGrande.classList.replace("border-red-400","border-gray-100")
        botonCantidadInviGrande.classList.replace("border-red-400","border-gray-100")
    }
})
//--------

botonLocacionGrande.addEventListener("click",function(){
    if (selectLocacionGrande.classList.contains("opacity-0")){
        selectLocacionGrande.classList.replace("opacity-0","opacity-100")
        selectLocacionGrande.classList.remove("pointer-events-none")
        botonLocacionGrande.classList.replace("border-gray-100","border-red-400")
        botonCantidadInviGrande.classList.replace("border-red-400","border-gray-100")
        cantidadInviGrande.classList.replace("opacity-100","opacity-0")
        cantidadInviGrande.classList.add("pointer-events-none")
    }
})

botonCantidadInviGrande.addEventListener("click",function(){
    if (cantidadInviGrande.classList.contains("opacity-0")){
        cantidadInviGrande.classList.replace("opacity-0","opacity-100")
        cantidadInviGrande.classList.remove("pointer-events-none")
        botonCantidadInviGrande.classList.replace("border-gray-100","border-red-400")
        botonLocacionGrande.classList.replace("border-red-400","border-gray-100")
        selectLocacionGrande.classList.replace("opacity-100","opacity-0")
        selectLocacionGrande.classList.add("pointer-events-none")
    }
})