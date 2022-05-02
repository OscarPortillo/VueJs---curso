console.log("Ternarios y null check")

let firstName
let lastName = "Portillo"

console.log(`${ firstName || 'No first name'} ${ lastName || 'No last name'}`)

const isActive = true

const message = (isActive ? 'Active' : 'Inactive')

console.log(message)