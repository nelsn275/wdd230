// Windchill
function showWindchill(temp, speed){
  const windchillSpan = document.getElementById('windchill')

  let message = "N/A"

  if (temp <= 50 && speed > 3){

    let chillFactor = Math.pow(speed, 0.16)
    let chill = 35.74 + (0.6215 * temp) - (35.75 * chillFactor) + (0.4275 * temp * chillFactor)

    message = `${Math.round(chill)}`
  }

  windchillSpan.textContent = message
}
const tempSpan = document.getElementById("temperature")
const windspeedSpan = document.getElementById("windspeed")
const temperature = parseInt(tempSpan.textContent)
const windspeed = parseInt(windspeedSpan.textContent)

showWindchill(temperature, windspeed)