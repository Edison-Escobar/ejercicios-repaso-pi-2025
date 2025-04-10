
//46. Calcular promedio de notas
//
//Tema: reduce()

const notas = [80, 90, 70, 100]

let suma = notas.reduce((acumulador, nota) => acumulador + nota, 0)

let promedio = suma / notas.length

console.log(promedio)