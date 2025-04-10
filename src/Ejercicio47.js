//47. Ordenar productos por precio

//Tema: sort()

const productos = [
    { nombre: 'Monitor', precio: 300 },
    { nombre: 'Mouse', precio: 25 },
    { nombre: 'Teclado', precio: 100 },
]

function ordenarPrecio(productos) {
    productos.sort((a, b) => a.precio - b.precio)
    console.log(`Producto ordenado por precio : `, productos)
}

ordenarPrecio(productos)