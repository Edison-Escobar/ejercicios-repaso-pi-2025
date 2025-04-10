//** 25. Menú interactivo (simulado)

//Tema: do...while

//Simula un menú que se muestra al menos una vez.

    const prompt = require('prompt-sync')();

let nombre = "Edison";
let opcion = "";

do {
    opcion = prompt(`
Selecciona una opción por letra en Mayuscula:
A. Bienvenida
B. Bienvenida personalizada 
C. Salir

> `).toUpperCase();

    switch (opcion) {
        case "A":
            console.log("Bienvenid@");
            break;
        case "B":
            console.log(`Bienvenido, ${nombre}`);
            break;
        case "C":
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("Opción no válida, intenta de nuevo.");
    }

} while (opcion !== "C");