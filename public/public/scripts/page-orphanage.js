//Tipos de dados
//String "" 
//Number 01
//object {}
// Boolean True or False
//Array []

const options = {
    dragging: false,
    touchZoom: false,
    doubleClickzoom: false,
    scrollWheelZoom: false,
    zoomControl: false

}

// create map
const map = L.map('mapid', options).setView([-27.2145525,-49.6440873], 15);


// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create a marker
L.marker([-27.2145525,-49.6440873], { icon })
.addTo(map)
;


/* image gallery */

function selectImage(event) {
    const button = event.currentTarget;

    console.log(button.children)

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass) // Podia usar ((button) => {button.classList.remove(".active")})

    function removeActiveClass(button) {
        button.classList.remove(".active")
    }
    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //analisar o container de imagem
    imageContainer.src = image.src
    
    //adicionar a classe .active para este botao
    button.classList.add('active')
}