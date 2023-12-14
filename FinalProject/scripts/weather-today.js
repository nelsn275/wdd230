const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.1216362&lon=-117.3702038&appid=1b59a46c43a6de2f4168e7eb719320eb&units=imperial'

function displayWeather(data){
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    let description = data.weather[0].description
    let temp = data.main.temp.toFixed(0)
    let weather = document.getElementById("current-weather")
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

// Forecast

const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=45.5170156&lon=-123.0671061&appid=1b59a46c43a6de2f4168e7eb719320eb&units=imperial'
const ONEDAY = 24 * 60 * 60 * 1000
let datesElement = document.getElementById('dates')

async function fetchForecast(){
    const response = await fetch(apiURL)
    if (response.ok){
        let data = await response.json()
        let weatherData = data.list
        showForecast(weatherData)
    }
    else{
        throw Error(await response.text)
    }
}

function showForecast(forecasts){
    let dates = []
    let mydate = new Date()
    for (let i=0; i < 3; i++){
        mydate = new Date(mydate.getTime() + ONEDAY)
        let nextdate = mydate.toISOString().slice(0, 10)
        dates.push(nextdate)
    }
    console.log(dates)
    
}
fetchForecast()
