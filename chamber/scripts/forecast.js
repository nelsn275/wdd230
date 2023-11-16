const URL = 'https://api.openweathermap.org/data/2.5/forecast?lat=43&lon=-111&appid=1b59a46c43a6de2f4168e7eb719320eb&units=imperial'
const ONEDAY = 24 * 60 * 60 * 1000

async function fetchForecast(){

}

function showForeast(forecasts){
    console.log(forecasts)
    let dates = []
    let mydate = new Date()
    for (let i=0; i < 3; i++){
        mydate = new Date(mydate.getTime() + ONEDAY)
        nextdate = mydate.toISOString().slice(0, 10)
        dates.push(nextdate)
    }
    console.log(dates)

    highTemps = dates.map((date) => forecasts
    .filter(x => x.dt_txt.startsWith(date))
    .reduce((prev, next) => prev.main.temp > next.main.temp ? prev : next)
    )
    lowTemps = dates.map((date) => forecasts
    .filter(x => prev.main.temp < next.main.temp ? prev : next)
    .reduce((prev, next) => prev.main.temp < next.main.temp ? prev : next)
    )
    console.log(highTemps)
    console.log(lowTemps)
    
}