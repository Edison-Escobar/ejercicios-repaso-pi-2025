//35. Invertir un arreglo

//Tema: lógica con índices

const numeros = [1, 2, 3, 4, 5]
const cambiado = []

for (let i = numeros.length - 1; i >= 0 ; i--) {
    cambiado.push(numeros[i])
}

console.log(cambiado)