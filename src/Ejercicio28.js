// 28. Validación de contraseña

//tema: verificación en do...while


const prompt = require('prompt-sync')();

const CONTRASENA_CORRECTA = 'claveSegura'
let contrasena

do {
    contrasena = prompt(`Ingrese la conraseña :
        >  `)

    if (contrasena === CONTRASENA_CORRECTA) {
        console.log("Acceso permitido")
    } else {
        console.log("Contraseña incorrecta")
    }
} while (contrasena !== CONTRASENA_CORRECTA);