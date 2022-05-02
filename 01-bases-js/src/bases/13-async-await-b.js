console.log("Async - Await - Aplicado en la vida real")

import giphyApi from './bases/11-axios'

const getImage = async() => {

    try {
        const { data } = (await giphyApi.get('/random')).data
        const {url} = data.images.original

        console.log(url)

        const img = document.createElement('img')
        img.src = url
        document.body.append(img)


    } catch (error) {
        console.log("Error en la petición", error)
        throw error
    }
}

getImage()