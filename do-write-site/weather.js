
const APIKey = "b74f5609c6d59ad542064eb2e7a2f309" ;

function onGeoOk(position) {
    const lat = position.coords.latitude ;
    const lon = position.coords.longitude;
    console.log ("You live in " , lat, lon) ; 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`
    console.log(url);
    fetch(url).then((response)=>response.json())
            .then((data) => {
    const name = data.name ;
    const weather = data.weather[0].main;
    const weather1 = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");

    weather1.innerText =" 날씨 : " + weather ;
    city.innerText = "위치 : " + name ;
            });
}   
 
function onGeoError() {
    alert(" Can't find you. no weather") ; 
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);