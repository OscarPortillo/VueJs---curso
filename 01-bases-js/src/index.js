
// function saludar(nombre) {
//     return `Hola ${nombre}`
// }

// const saludar = function (nombre) {
//     return `Hola ${nombre}`
// }

// funciones de flechas
const saludar = (nombre = 'Peter') => `Hola ${nombre}`

const nombre = 'Oscar'
console.log(saludar(nombre))

// const getUser = () => {
//     return {
//         uid: 'ABC123',
//         username: 'Oscarin'
//     }
// }

const getUser = () => ({uid: 'ABC123', username: 'Oscarin'})

console.log(getUser())
const heroes = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id:2,
        name: 'Superman'
    }
]

const heroesId = heroes.some(heroe => heroe.id === 2)
console.log(heroesId)