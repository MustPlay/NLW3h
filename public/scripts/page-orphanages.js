//Tipos de dados
//String "" 
//Number 01
//object {}
// Boolean True or False
//Array []


// create map
const map = L.map('mapid').setView([-27.2145525,-49.6440873], 15);


// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconsize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240

}).setContent('Lar das Meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"></a>')


// create a marker
L.marker([-27.2145525,-49.6440873], { icon })
.addTo(map)
.bindPopup(popup);
