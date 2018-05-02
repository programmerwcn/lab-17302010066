const countries = [
    { name: "Canada", continent: "North America", cities: ["Calgary","Montreal","Toronto"], photos: ["canada1.jpg","canada2.jpg","canada3.jpg"] },
    { name: "United States", continent: "North America", cities: ["Boston","Chicago","New York","Seattle","Washington"], photos: ["us1.jpg","us2.jpg"] },
    { name: "Italy", continent: "Europe", cities: ["Florence","Milan","Naples","Rome"], photos: ["italy1.jpg","italy2.jpg","italy3.jpg","italy4.jpg","italy5.jpg","italy6.jpg"] },
    { name: "Spain", continent: "Europe", cities: ["Almeria","Barcelona","Madrid"], photos: ["spain1.jpg","spain2.jpg"] }
];

const number=countries.length;

function generatePhotos(i) {
    let htmlOfPhotos="";
    const photos=countries[i].photos;
    const numOfPhotos=photos.length;
    for(let j=0;j<numOfPhotos;j++){
        let srcOfPhoto=photos[j];
        srcOfPhoto='"images/'+srcOfPhoto+'"';
        htmlOfPhotos=htmlOfPhotos+'<img class="photo" src='+srcOfPhoto+'>'
    }
    return htmlOfPhotos;
}

function generateCities(i){
let htmlOfCities="";
const cities=countries[i].cities;
const numOfCities=cities.length;
for(let j=0;j<numOfCities;j++){
    htmlOfCities=htmlOfCities+"<p>"+cities[j]+"</p>";
}
return htmlOfCities;
}

function generate() {
    let container= document.getElementById("start");
    let htmlOfItems="";

    for(let i=0;i<number;i++){
        htmlOfItems=htmlOfItems+'<div class=item>'+'</div>';
    }
    container.innerHTML=htmlOfItems;

    for (let i = 0; i < number; i++) {
        let itemGroups=document.getElementsByClassName("item");
        itemGroups[i].innerHTML =
            '<h2>'+countries[i].name+'</h2>'+
            '<p>'+countries[i].continent+'</p>'+

            '<div class="inner-box">'+
            '<h3>Cities</h3>'+
            generateCities(i)+
            '</div>'+

            '<div class="inner-box">' +
            '<h3>Related Photos</h3>' +
            generatePhotos(i)+
            '</div>'+

            '<button>visit</button>';
    }
}
