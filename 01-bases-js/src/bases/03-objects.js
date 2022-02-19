const persona = {
    nombre: 'Oscar',
    apellido: 'Portillo',
    edad: 27,
    direccion: {
        ciudad: 'Ciudad falsa',
        zip: '12345',
        lat: '123',
        lng: '123'
    }
}

const persona2 = { ...persona } //operador spread
persona2.nombre = 'Oscarin'

console.log(persona);
console.log(persona2);