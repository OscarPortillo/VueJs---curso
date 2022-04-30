console.log("Fetch API")
// https://api.giphy.com/v1/gifs/random?api_key=tjb00on0waLXRsufkOKeauQaDPqc21kq

const apiKey = "tjb00on0waLXRsufkOKeauQaDPqc21kq" 
// manera difícil
// fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
// .then(response => {
//     response.json()
//         .then(json => console.log(json))
// })
// .catch(error => console.log(error))

// Manera más fácil
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
.then(response => response.json())
.then(({ data }) => {
    const { url } = data.images.original
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
})
.catch(error => console.log(error))