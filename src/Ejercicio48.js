//48. Verificar si un producto está en la lista

//Tema: includes()

const productos = ['Mouse', 'Teclado', 'Monitor']
let productoEncontrado = false

if (productos.includes('Monitor')){
    productoEncontrado = true
} else {
    productoEncontrado = false
}

console.log(`El producto buscado esta en el almacen : ${productoEncontrado}` )