console.log("Async - Await")

const miPromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('Tenemos un valor en la promesa')
            reject('Tenemos un error en la promesa')
        }, 1000)
    })
}

const medirTiempoAsync = async() => {
    try {
        console.log("Inicio")

        const response = await miPromesa()
    
        console.log(response)
        
        console.log("Fin")
    
        return 'Hola, fin de medir tiempo async'
        // throw new Error('Error en medir tiempo async')
    } catch (error) {
        throw 'Hola, error en medir tiempo async'
    }
    
}

medirTiempoAsync()
.then(value => console.log(value))
.catch(err => console.log('Error: ', err))