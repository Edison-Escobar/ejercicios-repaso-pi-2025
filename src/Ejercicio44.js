//44. Aplicar IVA a productos

//Tema: map()


function agregarIva(productos) {
    const productosconIva = productos.map((producto) => {
        producto.precio = producto.precio * 1.2
        return producto

    })
        return productosconIva
}





const productos = [
    { nombre: 'Zapatos', precio: 100 },
    { nombre: 'Camisa', precio: 80 },
]

const productosconIva = agregarIva(productos)

console.log(productosconIva)