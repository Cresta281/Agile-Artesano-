let fuego_array = []
let agua_array = []
let aire_array = []
let tierra_array = []
let array_general = []

$.getJSON('scripts/artesanos.json', function (data){
    data.forEach(elemento => array_general.push(elemento))
    shuffleArray(array_general)
    ordenarElemento(array_general)
    mostrarFuego(fuego_array)
    mostrarAgua(agua_array)
    mostrarTierra(tierra_array)
    mostrarAire(aire_array)
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

function ordenarElemento(elementos){
    elementos.forEach(artesano => {
        if(artesano.elemento === "Fuego"){
            fuego_array.push(artesano)
        }if(artesano.elemento === "Tierra"){
            tierra_array.push(artesano)
        }if(artesano.elemento === "Agua"){
            agua_array.push(artesano)
        }else if(artesano.elemento === "Aire"){
            aire_array.push(artesano)
        }
    })
} 

function mostrarFuego(artesanos){
    artesanos.forEach(artesano => {
        $('#carousel_fuego').append(
            `
            <div class="col-sm-3">
            <div class="carousel-item">
            <div class="card">
                <img src=${artesano.img} class="card-img-top" alt="...">
                <div class="card_body">
                    <h5 class="card_title">${artesano.nombre}</h5>
                    <p class="card_text">${artesano.taller}</p>
                    <p class="card_text frase">${artesano.Frase}</p>
                    <a href="${artesano.red}"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            </div>
        </div>
            `
        )
    })
}

function mostrarAgua(artesanos){
    artesanos.forEach(artesano => {
        $('#carousel_agua').append(
            `
            <div class="col-sm-3">
            <div class="carousel-item">
            <div class="card">
                <img src=${artesano.img} class="card-img-top" alt="...">
                <div class="card_body">
                    <h5 class="card_title">${artesano.nombre}</h5>
                    <p class="card_text">${artesano.taller}</p>
                    <p class="card_text frase">${artesano.Frase}</p>
                    <a href="${artesano.red}"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            </div>
        </div>
            `
        )
    })
}

function mostrarTierra(artesanos){
    artesanos.forEach(artesano => {
        $('#carousel_tierra').append(
            `
            <div class="col-sm-3">
            <div class="carousel-item">
            <div class="card">
                <img src=${artesano.img} class="card-img-top" alt="...">
                <div class="card_body">
                    <h5 class="card_title">${artesano.nombre}</h5>
                    <p class="card_text">${artesano.taller}</p>
                    <p class="card_text frase">${artesano.Frase}</p>
                    <a href="${artesano.red}"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            </div>
        </div>
            `
        )
    })
}

function mostrarAire(artesanos){
    artesanos.forEach(artesano => {
        $('#carousel_aire').append(
            `
            <div class="col-sm-3">
            <div class="carousel-item">
            <div class="card">
                <img src=${artesano.img} class="card-img-top" alt="...">
                <div class="card_body">
                    <h5 class="card_title">${artesano.nombre}</h5>
                    <p class="card_text">${artesano.taller}</p>
                    <p class="card_text frase">${artesano.Frase}</p>
                    <a href="${artesano.red}"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            </div>
        </div>
            `
        )
    })
}
