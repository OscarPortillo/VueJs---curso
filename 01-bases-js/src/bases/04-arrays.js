const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arreglo.push(11)

const arreglo2 = [ ... arreglo ] // spread operator for arrays

arreglo2.push(12)

const arreglo3 = arreglo2.map( function(n) {
    return n
})
arreglo3.push(13)
console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)