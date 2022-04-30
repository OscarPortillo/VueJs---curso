const person = {
    name: 'Oscar',
    age: 30,
    codeName: 'Mascota',
    // power: 'The most powerfull superhero'
}

// console.log(person.name);
// console.log(person.age);
// console.log(person.codeName);

const { name, age, codeName, power } = person
console.log(name, age, codeName, power);

// const createHero = (personParam) => {
// const createHero = ({ name, age, codeName, power = 'The most powerfull superhero' }) => {

//     return {
//         id: '123',
//         name,
//         age,
//         codeName,
//         power
//     }
// }

const createHero = ({ name, age, codeName, power = 'The most powerfull superhero' }) =>
    ({
        id: '123',
        name,
        age,
        codeName,
        power
    })

console.log(createHero(person));