// 23. Mes del año

//Tema: agrupación de casos

let mes = "abril"

switch (mes) {
    case "abril":
    case "junio":
    case "septiembre":
    case"noviembre" :
        console.log("El mes tiene 30 días")
    break
    case "enero":
    case "marzo":
    case"mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        console.log("El mes tiene 28 días")
    break
    case "febrero":
        console.log("El mes tiene 28 Dias")
    break
    default:
        console.log("Mes no válido")
}