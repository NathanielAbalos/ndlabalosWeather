const descriptionValue = document.querySelector("#descriptionDisplay");
const temperatureValue = document.querySelector("#tempDisplay");
const inputText = document.querySelector("#searchBar");
const searchButton = document.querySelector(".circle");
const apiKey="4a6e3889789b198be919a80ef3ef5cea";
const cityDisplay = document.querySelector("#cityName");
let cityName;
const weatherIcon = document.querySelector("#weatherIcon");

window.onload=function(){
    document.querySelector(".content").style.display="none";
}

searchButton.addEventListener("click", getWeather);
inputText.addEventListener("keyup",(event) =>{
    if(event.code==="Enter"){
        getWeather();
    }
});

function getWeather(){
    cityName = inputText.value;
    document.querySelector(".content").style.display="flex";
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey+"&units=metric")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        weatherIcon.src="https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
        cityDisplay.textContent=data.name;
        descriptionValue.textContent=data.weather[0].description;
        temperatureValue.textContent=data.main.temp+"°C";
    });

}



