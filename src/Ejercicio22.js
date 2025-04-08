// 22. Tipo de transporte

//Tema: switch con texto

let tipo = 'moto'


switch (tipo) {
    case 'carro':
    case 'moto' :
        console.log('Vehiculo con Motor')
    break
    case 'bicicleta':
    case 'patineta' :
        console.log('Vehiculo sin Motor')
    break
    default:
        console.log("Tipo desconocido")

}