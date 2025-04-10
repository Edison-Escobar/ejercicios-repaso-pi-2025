//41. Generar contraseña aleatoria

//Tema: lógica con bucle dentro de función

function generarContraseña(longitud) {
    const caracteres = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567989'
    let contrasena = ''

    for (let i = 0 ; i < longitud ; i++){
        let aleatorio = Math.floor(Math.random() * caracteres.length)
        contrasena += caracteres[aleatorio]
    }

    return contrasena
}

let micontrasena = generarContraseña(6)

console.log(`La contraseña generada es : >  `, micontrasena)