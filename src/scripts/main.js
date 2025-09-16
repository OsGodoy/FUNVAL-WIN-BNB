/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { funcionalidadBotones } from "./utils.js";
funcionalidadBotones()

import { stays } from "./stays.js";

console.log(stays);

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
            <div class="w-full flex flex-col items-center justify-center gap-1 py-2">
                <img class="h-50 sm:h-55 lg:h-60 w-full rounded-2xl" src="${photo}" alt="">
                <div class="w-[95%] flex items-center justify-between">
                    ${superHost ? `
                    <div class="flex items-center justify-center border h-8 w-[35%] rounded-xl border-red-400">
                        <p class="text-[10px] font-medium">
                            SUPER HOST
                        </p>
                    </div>` : ``}
                    <h3 class="flex text-[14px] font-medium text-gray-500 p-1.5">
                        ${type}. ${beds == null ? "-" : beds < 2 ? "1 bed" : beds + " beds"}
                    </h3>
                    <div class="w-[18%] flex items-center justify-between">
                        <svg class="size-4 w-[45%] text-red-400 fill-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <p class="w-[45%] flex place-content-center text-[15px] font-medium text-gray-600">
                            ${rating}
                        </p>
                    </div>
                </div>
                <p class="w-[98%] text-sm font-semibold text-gray-700 self-end truncate px-1.5">
                    ${title}
                </p>
            </div>`
}

