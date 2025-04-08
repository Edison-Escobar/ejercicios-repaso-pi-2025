// 19. Calculadora básica

//Tema: condiciones múltiples + operadores

let num1 = 12
let num2 = 3
let operacion = '+'

if (operacion =='+') {
    let sum = num1 + num2
    console.log(`La operacion fue una suma de ${num1} y ${num2} y el resultado es ${sum}`)
} else if (operacion == '-') {
    let rest = num1 - num2
    console.log(`La operacion fue una resta de ${num1} y ${num2} y el resultado es ${rest}`)
} else if (operacion == '*') {
    let mult = num1 * num2
    console.log(`La operacion fue una Multiplicacion de ${num1} y ${num2} y el resultado es ${mult}`)
} else if (operacion == '/') {
    let div = num1 / num2
    console.log(`La operacion fue una Division de ${num1} y ${num2} y el resultado es ${div}`)
}