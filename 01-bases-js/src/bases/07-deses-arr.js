console.log("Desectructuración de arreglos");

const characters = [
    'Goku',
    'Vegeta',
    'Trunks',
    'Piccolo',
    'Gohan',
    'Goten'
]

const goku = characters[0]
const vegeta = characters[1]
const trunks = characters[2]

console.log(goku, vegeta, trunks);

//desesctructuracion
const [g, v, t] = characters
console.log(g, v, t);

const returnArrays = ([letras, numeros, booleano]) => {
    return [letras, numeros, booleano]
}
const [letras, numeros, booleano] = returnArrays(['ABC', 123, true])
console.log(letras, numeros, booleano)