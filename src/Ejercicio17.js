//17. Mayor de tres números

let a = 10,
    b = 5,
    c = 7

if (a > b ) {
    if (a > c ){
        console.log('El mayor es a', a)
    } else {
        console.log('El mayor es c', c)
    }
} else if (b > c) {
    console.log('El mayor es b', b)
}