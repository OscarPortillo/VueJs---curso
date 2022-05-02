console.log("AXIOS")

 import axios from 'axios'

 const apiKey = "tjb00on0waLXRsufkOKeauQaDPqc21kq" 
 
 // `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

 const giphyApi = axios.create({
        baseURL: `https://api.giphy.com/v1/gifs`,
        params: {
            api_key: apiKey
        }
 })

 export default giphyApi

 giphyApi.get('/random')
 .then(response => {
    // console.log(response.data)
    // const img = document.createElement('img')
    // img.src = response.data.data.images.original.url
    // document.body.append(img)

    const { data } = response.data
    const { url } = data.images.original

    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
 })