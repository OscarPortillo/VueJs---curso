import superHeroes from '../data/heroes'

// export const getHeroById = (id) =>  {
//     return superHeroes.find(hero => hero.id === id)
// }

// export const getHeroesByOwner = (owner) => {
//     return superHeroes.filter(hero => hero.owner === owner)
// }

export const getHeroById = (id) => superHeroes.find(hero => hero.id === id)

export const getHeroesByOwner = (owner) => superHeroes.filter(hero => hero.owner === owner)
// console.log(getHeroById(2))

// console.log(getHeroesByOwner('DC')) // DC or MARVEL in params
