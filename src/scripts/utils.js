/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */

// funcionalidad de los botones // inicio

// botones mobile 

export {funcionalidadBotones}

function funcionalidadBotones() {

let botonBuscarMobile = document.querySelector("#botonBuscarMobile")
let contenModalBuscarMobile = document.querySelector("#contenModalBuscarMobile")
let modalBuscarMobile = document.querySelector("#modalBuscarMobile")
let cerrarBuscarMobile = document.querySelector("#cerrarBuscarMobile")

let botonCantidadInviMobile = document.querySelector("#botonCantidadInviMobile")
let cantidadInviMobile = document.querySelector("#cantidadInviMobile")

let botonLocacionMobile = document.querySelector("#botonLocacionMobile")
let selectLocacionMobile = document.querySelector("#selectLocacionMobile")

let busquedaOkMobile = document.querySelector("#busquedaOkMobile")

botonBuscarMobile.addEventListener("click", function(){
    if (contenModalBuscarMobile.classList.contains("opacity-0")){
        contenModalBuscarMobile.classList.replace("opacity-0","opacity-100")
        contenModalBuscarMobile.classList.remove("pointer-events-none")
        modalBuscarMobile.classList.add("translate-y-0")        
    }
})

cerrarBuscarMobile.addEventListener("click", function(){
    if (contenModalBuscarMobile.classList.contains("opacity-100")){
        contenModalBuscarMobile.classList.replace("opacity-100","opacity-0")
        modalBuscarMobile.classList.replace("translate-y-0","-translate-y-full")
        contenModalBuscarMobile.classList.add("pointer-events-none")
        cantidadInviMobile.classList.replace("opacity-100","opacity-0")
        cantidadInviMobile.classList.add("pointer-events-none")
        selectLocacionMobile.classList.replace("opacity-100","opacity-0")
        selectLocacionMobile.classList.add("pointer-events-none")
        botonLocacionMobile.classList.replace("border-red-400","border-gray-100")
        botonCantidadInviMobile.classList.replace("border-red-400","border-gray-100")
    }
})

busquedaOkMobile.addEventListener("click", function(){
    if (contenModalBuscarMobile.classList.contains("opacity-100")){
        contenModalBuscarMobile.classList.replace("opacity-100","opacity-0")
        modalBuscarMobile.classList.replace("translate-y-0","-translate-y-full")
        contenModalBuscarMobile.classList.add("pointer-events-none")
    }
})

botonLocacionMobile.addEventListener("click",function(){
    if (selectLocacionMobile.classList.contains("opacity-0")){
        selectLocacionMobile.classList.replace("opacity-0","opacity-100")
        selectLocacionMobile.classList.remove("pointer-events-none")
        cantidadInviMobile.classList.add("pointer-events-none")
        botonLocacionMobile.classList.replace("border-gray-100","border-red-400")
        botonCantidadInviMobile.classList.replace("border-red-400","border-gray-100")
        cantidadInviMobile.classList.replace("opacity-100","opacity-0")
    }
})

botonCantidadInviMobile.addEventListener("click", function(){
    if (cantidadInviMobile.classList.contains("opacity-0")){
        cantidadInviMobile.classList.replace("opacity-0","opacity-100")
        cantidadInviMobile.classList.remove("pointer-events-none")
        selectLocacionMobile.classList.replace("opacity-100","opacity-0")
        selectLocacionMobile.classList.add("pointer-events-none")
        botonCantidadInviMobile.classList.replace("border-gray-100","border-red-400")
        botonLocacionMobile.classList.replace("border-red-400","border-gray-100")
    }
})

// botones grandes

let botonBuscarGrande = document.querySelector("#botonBuscarGrande")
let contenModalBuscarGrande = document.querySelector("#contenModalBuscarGrande")
let modalBuscarGrande = document.querySelector("#modalBuscarGrande")

let botonCantidadInviGrande = document.querySelector("#botonCantidadInviGrande")
let cantidadInviGrande = document.querySelector("#cantidadInviGrande")

let botonLocacionGrande = document.querySelector("#botonLocacionGrande")
let selectLocacionGrande = document.querySelector("#selectLocacionGrande")

let busquedaOkGrande = document.querySelector("#busquedaOkGrande")

botonBuscarGrande.addEventListener("click",function(){
    if (contenModalBuscarGrande.classList.contains("opacity-0")){
        contenModalBuscarGrande.classList.replace("opacity-0","opacity-100")
        contenModalBuscarGrande.classList.remove("pointer-events-none")
        modalBuscarGrande.classList.add("translate-y-0")
    }
})

contenModalBuscarGrande.addEventListener("click",function(e){
    if (e.target === contenModalBuscarGrande){
        if (contenModalBuscarGrande.classList.contains("opacity-100")){
            contenModalBuscarGrande.classList.replace("opacity-100","opacity-0")
            contenModalBuscarGrande.classList.add("pointer-events-none")
            modalBuscarGrande.classList.replace("translate-y-0","-translate-y-full")
            selectLocacionGrande.classList.replace("opacity-100","opacity-0")
            selectLocacionGrande.classList.add("pointer-events-none")
            cantidadInviGrande.classList.replace("opacity-100","opacity-0")
            cantidadInviGrande.classList.add("pointer-events-none") 
            botonLocacionGrande.classList.replace("border-red-400","border-gray-100")
            botonCantidadInviGrande.classList.replace("border-red-400","border-gray-100")
        }
        
    }
})

busquedaOkGrande.addEventListener("click",function(){
    if (contenModalBuscarGrande.classList.contains("opacity-100")){
        contenModalBuscarGrande.classList.replace("opacity-100","opacity-0")
        contenModalBuscarGrande.classList.add("pointer-events-none")
        modalBuscarGrande.classList.replace("translate-y-0","-translate-y-full")
    }
})

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
}

// funcionalidad de los botones // fin

// funcionalidad para calcular huespedes mobile // inicio

export {calcularHuespedesMobile}

function calcularHuespedesMobile() {

let cantidadAdultosMobile = document.querySelector("#cantidadAdultosMobile")
let cantidadPequesMobile = document.querySelector("#cantidadPequesMobile")
let totalMobile = document.querySelector("#totalMobile")

let cantidadAdultosSelec = 0
let cantidadPequesSelec = 0

cantidadInviMobile.addEventListener("click",event => {
    
    if (event.target.classList.contains("masAdultos")){
        cantidadAdultosSelec ++ 
    }

    if (event.target.classList.contains("menosAdultos")){
        if (cantidadAdultosSelec > 0){
            cantidadAdultosSelec --
        }
    }

    if (event.target.classList.contains("masPeques")){
        cantidadPequesSelec ++
    }

    if (event.target.classList.contains("menosPeques")){
        if (cantidadPequesSelec > 0){
            cantidadPequesSelec --
        }
    }

    cantidadPequesMobile.textContent = cantidadPequesSelec
    cantidadAdultosMobile.textContent = cantidadAdultosSelec
    totalMobile.classList.replace("text-gray-300","text-gray-700")
    totalMobile.textContent = cantidadAdultosSelec + cantidadPequesSelec
    })
}

// funcionalidad para calcular huespedes grande // inicio

export {calcularHuespedesGrande}

function calcularHuespedesGrande() {

let cantidadAdultosGrande = document.querySelector("#cantidadAdultosGrande")
let cantidadPequesGrande = document.querySelector("#cantidadPequesGrande")
let totalGrande = document.querySelector("#totalGrande")

let cantidadAdultosSelec = 0
let cantidadPequesSelec = 0

cantidadInviGrande.addEventListener("click",event => {
    
    if (event.target.classList.contains("masAdultos")){
        cantidadAdultosSelec ++ 
    }

    if (event.target.classList.contains("menosAdultos")){
        if (cantidadAdultosSelec > 0){
            cantidadAdultosSelec --
        }
    }

    if (event.target.classList.contains("masPeques")){
        cantidadPequesSelec ++
    }

    if (event.target.classList.contains("menosPeques")){
        if (cantidadPequesSelec > 0){
            cantidadPequesSelec --
        }
    }

    cantidadPequesGrande.textContent = cantidadPequesSelec
    cantidadAdultosGrande.textContent = cantidadAdultosSelec
    totalGrande.classList.replace("text-gray-300","text-gray-700")
    totalGrande.textContent = cantidadAdultosSelec + cantidadPequesSelec
    })
}

