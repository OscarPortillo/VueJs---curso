console.log("PROMESAS")

console.log("Inicio")

new Promise( (resolve, reject) => {
    console.log("Cuerpo de la promesa")
    reject("Promesa resuelta con error")
    
}).then( console.log )
.catch( console.log )

console.log("Fin")


///////////////////////////////////// funciones asincronas

import { getHeroById } from './bases/08-imp-exp'

const getHeroByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() =>  {
            const hero = getHeroById(id)
            if(hero) {
                resolve(hero)
            } else {
                reject(`No se encontro el heroe con id ${id}`)
            }
        }, 1000);
    })
}

getHeroByIdAsync(89)
    .then(h => console.log(h))
    .catch(e => console.log(e))