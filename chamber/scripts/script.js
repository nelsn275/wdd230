document.getElementById("last-modified").innerHTML = document.lastModified;

// Hamburger Menu
function makeHamburger() {
    var x = document.getElementById("links");
        if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
        }
}

// Dark mode
var darkButton = document.querySelector("#dark-mode")
darkButton.addEventListener('click', ()=>{
  if (darkButton.textContent == 'DARK'){
    document.documentElement.style.setProperty('--text-color', '#ffe8d6')
    document.documentElement.style.setProperty('--background-color', '#6b705c')
    document.documentElement.style.setProperty('--hover-background', '#b7b7a4')
    document.documentElement.style.setProperty('--hover-text', 'black')
    darkButton.textContent = 'LIGHT'
  }
  else{
    document.documentElement.style.setProperty('--text-color', 'black')
    document.documentElement.style.setProperty('--background-color', '#b7b7a4')
    document.documentElement.style.setProperty('--hover-background', '#6b705c')
    document.documentElement.style.setProperty('--hover-text', '#ffe8d6')
    darkButton.textContent = 'DARK'
  }

})

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