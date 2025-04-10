//34. Promedio por eudiante (matriz)

//Tema: matriz + anidado

const notas = [
    [80, 90, 100], // Estudiante 1
    [70, 60, 75], // Estudiante 2
    [88, 95, 92], // Estudiante 3
]

for (let i = 0 ; i < notas.length ; i++){
    let sumatoria = 0

    for (let e = 0 ; e < notas[i].length ; e++){
        sumatoria += notas[i][e]
    }

    const promedio = sumatoria / notas[i].length

console.log(`Promedio del eudiante ${i + 1}`, promedio.toFixed(2))
}
