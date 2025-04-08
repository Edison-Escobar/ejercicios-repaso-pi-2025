//** 25. Menú interactivo (simulado)

//Tema: do...while

//Simula un menú que se muestra al menos una vez.

const nombre = "Edison"
let opciones = ("A")

do {
    switch (opciones){
        case "A":
            console.log("Bienvenid@")
        break
        case "B":
            console.log(`Bienvenido ${nombre}`)
        break
        case "C":
            console.log("Salir")
    }
    
} while (opciones);