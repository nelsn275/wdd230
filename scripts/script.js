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

// Site Rating
const rating = document.getElementById("rating")
rating.addEventListener('change', () => {
    document.getElementById("currentrating").innerHTML = rating.value;
})

// Password Match
const confirm = document.getElementById("confirm")
confirm.addEventListener('blur', ()=>{
    const password= document.getElementById("password")
    if (password.value != confirm.value){
        document.getElementById("message").innerHTML="Passwords do not match!"
        password.focus()    
    }
    else{
        document.getElementById("message").innerHTML=""
    }
})

// Weather API

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.830043&lon=-111.8293825&appid=1b59a46c43a6de2f4168e7eb719320eb&units=imperial'

function displayWeather(data){
    icon = data.weather[0].icon
    description = data.weather[0].description
    temp = data.main.temp.toFixed(0)
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


