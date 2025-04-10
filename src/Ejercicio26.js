// 26. Suma hasta 100

//Tema: acumulador en while

const numeros = [10, 15, 20, 25, 30, 5]
let suma = 0
let contador = 0

while (contador < numeros.length && suma + numeros[contador] <= 100){
    console.log(`Sumando numero ${numeros[contador]}`)
    suma += numeros[contador]
    console.log(`Suma Actual ${suma}`)
    contador ++
}