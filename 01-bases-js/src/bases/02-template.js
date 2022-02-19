const nombre = "Oscar"
const apellido = "Portillo"

const nombreCompleto = `${ nombre } ${ apellido }`

console.log(nombreCompleto)
console.log(`Resultado de la suma: ${ 1 + 2 }`)

function getSaludo (nombre) {
    return `Hola ${ nombre }`
}

console.log(`Este es un texto: ${ getSaludo(nombre) }`)