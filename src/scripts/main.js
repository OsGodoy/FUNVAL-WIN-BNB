/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { funcionalidadBotones } from "./utils.js";
funcionalidadBotones()

import { calcularHuespedesMobile } from "./utils.js"
calcularHuespedesMobile()

import { stays } from "./stays.js";

console.log(stays);

// INSERTANDO CATALOGO

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

    catalogoConten.innerHTML += `
            <div class="group cursor-pointer hover:scale-102 duration-300 w-full flex flex-col items-center justify-center gap-1 py-2">
                <img class="object-cover h-50 sm:h-55 lg:h-60 w-full rounded-2xl" src="${photo}" alt="">
                <div class="w-[98%] flex items-center justify-between">
                    ${superHost ? `
                    <div class="flex items-center justify-center border h-8 w-[28%] rounded-xl border-red-400">
                        <p class="text-[9px] sm:text-[10px] font-medium">
                            SUPER HOST
                        </p>
                    </div>` : ``}
                    <h3 class="flex text-[13px] font-medium text-gray-500 p-1">
                        ${type}. ${beds == null ? "-" : beds < 2 ? "1 bed" : beds + " beds"}
                    </h3>
                    <div class="w-[15%] flex items-center justify-center gap-1">
                        <svg class="group-hover:animate-[spin_1.1s_ease-out] size-4 w-[45%] text-red-400 fill-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <p class="w-[55%] flex place-content-center text-[12px] font-medium text-gray-600">
                            ${rating}
                        </p>
                    </div>
                </div>
                <p class="w-[98%] text-sm font-semibold text-gray-700 truncate px-1.5">
                    ${title}
                </p>
            </div>`
}


// INSERTANDO MODAL PARA EDICION DE BUSQUEDA

let ubiMobile = document.querySelector("#ubiMobile")
let ubiGrande = document.querySelector("#ubiGrande")
let ciudades = new Set()

stays.forEach(hospedajes => {
    if (!ciudades.has(hospedajes.city)){
        ciudades.add(hospedajes.city)
        ubiMobile.innerHTML += `
            <li [data-city] id="ubiSelecMobile1" class="p-1 h-8 gap-1 flex items-center justify-start">
                <svg class="size-4 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clip-rule="evenodd" />
                </svg>
                ${hospedajes.city}, ${hospedajes.country}
            </li>
            `
        
        ubiGrande.innerHTML += `
            <li class="cursor-pointer p-1 h-8 gap-1 flex items-center justify-start">
                <svg class="size-4 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clip-rule="evenodd" />
                </svg>
                ${hospedajes.city}, ${hospedajes.country}
            </li>`       
        }
    });