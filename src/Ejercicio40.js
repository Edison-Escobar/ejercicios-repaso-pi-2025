// 40. Validar correo electrónico

//Tema: lógica dentro de función
const prompt = require('prompt-sync')();

function validarCorreo(correo){
    if (correo.includes("@") && correo.includes(".")){
        console.log("Correo válido")
    } else {
        console.log("Correo inválido")
    }
}
let correoUsuario = prompt(`Ingrese su correo >  `)

validarCorreo(correoUsuario)

