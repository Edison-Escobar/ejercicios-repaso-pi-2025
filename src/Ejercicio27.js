//27. Juego del número secreto

//Tema: do...while con condición

const prompt = require('prompt-sync')();
let NUMERO_SECRETO
let ingresaN


do {
    ingresaN = parseInt(prompt(`Ingrese Un numero para adivinar El numero Secreto del 1 al 100 : >  `))

    NUMERO_SECRETO = Math.floor(Math.random() * 100) + 1
    console.log(`El número secreto es: ${NUMERO_SECRETO}`)

    if (ingresaN === NUMERO_SECRETO) {
        console.log('Adivinaste el Numero!!  Felicidades Ganaste')
    } else {
        console.log('Sigue Intentando ')
    }
    
} while (ingresaN !== NUMERO_SECRETO);