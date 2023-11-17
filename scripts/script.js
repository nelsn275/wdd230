// Nav
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});



// Date
const today= new Date();
document.querySelector('#currentyear').textContent = today.getFullYear();
document.querySelector('#lastmodified').textContent = document.lastModified;



// Site Visits
const VISITS_KEY = 'site-visits'

function getSiteVisits(){
	let currValue = localStorage.getItem(VISITS_KEY)
	let siteVisits = 1

	if (currValue != null){
		siteVisits = parseInt(currValue) + 1
	}
	localStorage.setItem(VISITS_KEY, `${siteVisits}`)
	return siteVisits
}

document.getElementById('visitcount').textContent = `${getSiteVisits()}`

// Weather API

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.830043&lon=-111.8293825&appid=1b59a46c43a6de2f4168e7eb719320eb&units=imperial'

function displayWeather(data){
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    let description = data.weather[0].description
    let temp = data.main.temp.toFixed(0)
    let weather = document.getElementById("weather")
    weather.textContent = `${temp}°F - ${description}`
    let weatherIcon = document.getElementById("weather-icon");
    weatherIcon.setAttribute('src', iconsrc);
}

async function getWeather(){
    const response = await fetch(url)
    if (response.ok){
        const data = await response.json()
        displayWeather(data)
    }
    else{
        console.log('Error getting Weather Data')
    }
}
getWeather()


