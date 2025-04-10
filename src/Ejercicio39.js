//39. Suma de arreglo

//Tema: función con arreglo como parámetro

const prompt = require('prompt-sync')();

function sumaArreglo(arreglo){
    let suma = 0
    for (let i = 0; i < arreglo.length; i++){
        suma += arreglo[i];
    }
    return suma;
}

function ingresarNumero(){
    let numeros = [];
    let seguir = true;

    while(seguir) {
        let numero = parseFloat(prompt("Ingresa un número:"));
        numeros.push(numero);

        let respuesta = prompt("¿Deseas agregar otro número? (sí/no)")
        if (respuesta === "no") {
            seguir = false;
        }
    }

    let sumaTotal = sumaArreglo(numeros);
    console.log(`La suma total de los números ingresados es: ${sumaTotal}`);
}

ingresarNumero();
