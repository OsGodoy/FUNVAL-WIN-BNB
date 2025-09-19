/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */


/// FUNCIONES IMPORTADAS /// INICIO

import { funcionalidadBotones } from "./utils.js"
funcionalidadBotones()

import { stays } from "./stays.js";


// INSERTANDO SKELETON

let ciudadesAgg = [];

for (let i = 1; i <= 9; i++) {
    catalogoCarga.innerHTML += `
            <div class="animate-pulse duration-75 ease-in-out w-full flex flex-col items-center justify-center gap-2 py-2">
                <div class="flex items-center justify-center bg-gray-300 object-cover h-50 sm:h-55 lg:h-60 w-full rounded-2xl">
                    <svg class="w-10 h-10 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                </div>
                <div class="w-[98%] flex items-center justify-between">
                    <div class="flex bg-gray-300 h-4 w-[65%]"> 
                    </div>
                    <div class="flex bg-gray-300 h-4 w-[25%]"> 
                    </div>
                </div>
                <div class="w-[98%] flex items-center justify-center">
                    <div class="flex bg-gray-300 h-4 w-full"> 
                    </div>
                </div>
            </div>`
}


// INSERTANDO CATALOGO PRINCIPAL

for (let i = 0; i < stays.length; i++) {

    let catalogoConten = document.querySelector("#catalogoConten")
    
    let {
        beds,
        city,
        country,
        maxGuests,
        photo,
        rating,
        superHost,
        title,
        type,
    } = stays[i]

    setTimeout(() => {
        catalogoCarga.innerHTML = ``
        catalogoConten.innerHTML += `
            <div class="catalogoTodos group cursor-pointer hover:scale-102 duration-300 w-full flex flex-col items-center justify-center gap-1 py-2 active:scale-98">
                <img class="object-cover h-50 sm:h-55 lg:h-60 w-full rounded-2xl" src="${photo}" alt="">
                <div class="w-[98%] flex items-center justify-between">
                    ${superHost ? `
                    <div class="flex items-center justify-center border h-8 w-[28%] rounded-xl border-red-400">
                        <p class="text-[9px] sm:text-[10px] font-medium dark:text-white">
                            SUPER HOST
                        </p>
                    </div>` : ``}
                    <h3 class="flex text-[13px] font-medium text-gray-500 dark:text-gray-400 p-1">
                        ${type}. ${beds == null ? "-" : beds < 2 ? "1 bed" : beds + " beds"}
                    </h3>
                    <div class="w-[15%] flex items-center justify-center gap-1">
                        <svg class="group-hover:animate-[spin_1.1s_ease-out] size-4 w-[45%] text-red-400 fill-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <p class="w-[55%] flex place-content-center text-[12px] font-medium text-gray-600 dark:text-white">
                            ${rating}
                        </p>
                    </div>
                </div>
                <p class="w-[98%] text-sm font-semibold text-gray-700 dark:text-gray-300 truncate px-1.5">
                    ${title}
                </p>
            </div>`
        
        let cantidadCards = document.querySelector("#cantidadCards")
            cantidadCards.textContent = `${catalogoConten.children.length} stays`

    }, 1000);

    
// INSERTANDO LOCACIONES PARA EL FILTRADO
    
let locacionesMobile = document.querySelector("#locacionesMobile")
let locacionesGrande = document.querySelector("#locacionesGrande")
            
let cityOK = `${city}, ${country}`

if (!ciudadesAgg.includes(cityOK)){
    ciudadesAgg.push(cityOK)
    locacionesMobile.innerHTML += `
        <li class="botonSelecLocacionMobile p-1 h-8 gap-1 flex items-center justify-start">
            <svg class="size-4 text-red-400 dark:text-rose-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clip-rule="evenodd" />
            </svg>
            ${cityOK}
        </li>`
        
    locacionesGrande.innerHTML += `
        <li class="botonSelecLocacionGrande p-1 h-8 gap-1 flex items-center justify-start cursor-pointer">
            <svg class="size-4 text-red-400 dark:text-rose-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clip-rule="evenodd" />
            </svg>
            ${cityOK}
        </li>`
    }
}


// FILTRO DE BUSQUEDA // MOBILE

let botonBuscarMobile = document.querySelector("#botonBuscarMobile")

let editarBusqueda = document.querySelector("#editarBusqueda")

let locacionSelecMobile = document.querySelector("#locacionSelecMobile")

let cantidadAdultosMobile = document.querySelector("#cantidadAdultosMobile")
let cantidadPequesMobile = document.querySelector("#cantidadPequesMobile")
let totalMobile = document.querySelector("#totalMobile")

let cantidadAdultosSelec = 0
let cantidadPequesSelec = 0

botonBuscarMobile.addEventListener("click", function(){
    if (contenModalBuscarMobile.classList.contains("opacity-0")){
        contenModalBuscarMobile.classList.replace("opacity-0","opacity-100")
        contenModalBuscarMobile.classList.remove("pointer-events-none")
        modalBuscarMobile.classList.add("translate-y-0")        
    }
})

editarBusqueda.addEventListener("click", event => {
  // --- mantén tu lógica de incrementar/decrementar aquí (igual que la tuya) ---
  if (event.target.closest(".botonSelecLocacionMobile")) {
    locacionSelecMobile.classList.replace("text-gray-300","text-gray-700")
    locacionSelecMobile.classList.replace("dark:text-white/60","dark:text-black")
    locacionSelecMobile.textContent = event.target.textContent
  }

  if (event.target.classList.contains("masAdultos")) {
    cantidadAdultosSelec++
  } else if (event.target.classList.contains("menosAdultos")) {
    if (cantidadAdultosSelec > 0) cantidadAdultosSelec--
  } else if (event.target.classList.contains("masPeques")) {
    cantidadPequesSelec++
  } else if (event.target.classList.contains("menosPeques")) {
    if (cantidadPequesSelec > 0) cantidadPequesSelec--
  }

  // actualizar UI de contadores
  cantidadPequesMobile.textContent = cantidadPequesSelec
  cantidadAdultosMobile.textContent = cantidadAdultosSelec
  totalMobile.classList.replace("text-gray-300","text-gray-700")
  totalMobile.classList.replace("dark:text-white/60","dark:text-black")
  totalMobile.textContent = cantidadAdultosSelec + cantidadPequesSelec

  // --- LECTURA ROBUSTA DE FILTROS ---
  let ciudadFiltrada = ""
  let ciudadTexto = (locacionSelecMobile.textContent || "").trim()
  if (locacionSelecMobile.classList.contains("text-gray-700") && ciudadTexto !== "") {
    ciudadFiltrada = ciudadTexto.includes(",") ? ciudadTexto.split(",")[0].trim() : ciudadTexto
    ciudadFiltrada = ciudadFiltrada.toLowerCase()
  }

  let totalNum = Number(totalMobile.textContent)
  let totalMobileOk = Number.isInteger(totalNum) && totalNum > 0 ? totalNum : null

  // --- FILTRADO con .filter() ---
  let staysFiltrados = stays.filter(stay => {
    let coincideCiudad = !ciudadFiltrada || (stay.city && stay.city.toLowerCase() === ciudadFiltrada)
    let coincideCapacidad = totalMobileOk == null || (stay.maxGuests >= totalMobileOk)
    return coincideCiudad && coincideCapacidad
  })

  // --- Mostrar/ocultar cards ---
  let contadorCards = 0
  let setFiltrados = new Set(staysFiltrados)
  Array.from(catalogoConten.children).forEach((card, i) => {
    if (setFiltrados.has(stays[i])) {
      card.classList.remove("hidden")
      card.classList.add("flex")
      contadorCards++
    } else {
      card.classList.add("hidden")
      card.classList.remove("flex")
    }
  })

  cantidadCards.textContent = `${contadorCards} stays`
})

