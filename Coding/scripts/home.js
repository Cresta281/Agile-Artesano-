
let artesanos_stock = []




$.getJSON('scripts/artesanos.json', function (data){
    data.forEach(elemento => artesanos_stock.push(elemento))
   shuffleArray(artesanos_stock)
   const sliced = artesanos_stock.slice(-8)
   mostrarArtesanos(sliced)
})
const shuffleArray = array => {
    for (let i = array.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1))
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}



function mostrarArtesanos(artesanos){
    artesanos.forEach(artesano => {
        $('#cards_container').append(
            `
            <div class="col-sm-3">
            <div class="card">
                <img src=${artesano.img} class="card-img-top" alt="...">
                <div class="card_body">
                    <h5 class="card_title">${artesano.nombre}</h5>
                    <p class="card_text">${artesano.taller}</p>
                    <p class="card_text frase">${artesano.Frase}</p>
                    <a href="${artesano.red}" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
            `
        )
    })
}