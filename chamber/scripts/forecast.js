const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=45.5170156&lon=-123.0671061&appid=1b59a46c43a6de2f4168e7eb719320eb&units=imperial'
const ONEDAY = 24 * 60 * 60 * 1000
let lows = document.getElementById('lows')
let highs = document.getElementById('highs')
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
    console.log(forecasts)
    let dates = []
    let mydate = new Date()
    for (let i=0; i < 3; i++){
        mydate = new Date(mydate.getTime() + ONEDAY)
        let nextdate = mydate.toISOString().slice(0, 10)
        dates.push(nextdate)
    }
    console.log(dates)

    let highTemps = dates.map((date) => forecasts
    .filter(x => x.dt_txt.startsWith(date))
    .reduce((prev, next) => prev.main.temp > next.main.temp ? prev : next)
    )
    let lowTemps = dates.map((date) => forecasts
    .filter(x => x.dt_txt.startsWith(date))
    .reduce((prev, next) => prev.main.temp < next.main.temp ? prev : next)
    )
    let highOutput = ""
    let lowOutput = ""
    let datesOutput = ""

    dates.forEach(element => {
        datesOutput += `| ${element} |`
    });

    highTemps.forEach(element => {
        highOutput += `| ${element.main.temp}°F |`
    });
    lowTemps.forEach(element => {
        lowOutput += `| ${element.main.temp}°F |`
    });
    lows.textContent = lowOutput
    highs.textContent = highOutput
    datesElement.textContent = datesOutput
    
}
fetchForecast()

const todayurl = 'https://api.openweathermap.org/data/2.5/weather?lat=43.830043&lon=-111.8293825&appid=1b59a46c43a6de2f4168e7eb719320eb&units=imperial'

function displayWeather(data){
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    let temp = data.main.temp.toFixed(0)
    let weather = document.getElementById("current-temp")
    weather.textContent = `${temp}°F `
}

async function getWeather(){
    const response = await fetch(todayurl)
    if (response.ok){
        const data = await response.json()
        displayWeather(data)
    }
    else{
        console.log('Error getting Weather Data')
    }
}
getWeather()
