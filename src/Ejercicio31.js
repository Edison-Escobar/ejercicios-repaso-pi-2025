// 31. Contar números pares

//Tema: condición dentro de for

const numeros = [2, 7, 10, 15, 22, 33]
let pares = 0


for (let i = 0 ; i < numeros.length ; i++) {
    if (numeros[i] % 2 == 0) {
        pares++
        console.log(`El numero es :`, numeros[i])
    } 
}

console.log(`Los numero pares son :`, pares)

