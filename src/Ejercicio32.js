//32. Buscar un nombre

//Tema: búsqueda en arreglo

const nombres = ['Ana', 'Carlos', 'Pedro', 'Lucía']

const nombreABuscar = 'Lucia'
let nombreEncontrado = false

for (let i = 0 ; i < nombres.length ; i++) {
    if (nombres[i] === nombreABuscar){
        nombreEncontrado = true
    }
}

if (nombreEncontrado) {
    console.log("Nombre encontrado")
} else {
    console.log("Nombre no encontrado")
}
