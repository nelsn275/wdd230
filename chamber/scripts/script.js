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
    document.documentElement.style.setProperty('--background-color', '#464B3F')
    document.documentElement.style.setProperty('--hover-background', '#b7b7a4')
    document.documentElement.style.setProperty('--hover-text', 'black')
    darkButton.textContent = 'LIGHT'
  }
  else{
    document.documentElement.style.setProperty('--text-color', 'black')
    document.documentElement.style.setProperty('--background-color', '#b7b7a4')
    document.documentElement.style.setProperty('--hover-background', '#464B3F')
    document.documentElement.style.setProperty('--hover-text', '#ffe8d6')
    darkButton.textContent = 'DARK'
  }

})


// Welcome Message

const LAST_VISIT_DATE_KEY = 'last-visit'
const DAY_IN_MILLIS = 24 * 60 * 60 * 1000

function displayWelcome() {
  let message = 'Welcome! Let us know if you have any questions'
  let lastVisitValue = localStorage.getItem(LAST_VISIT_DATE_KEY)

  let today = new Date()
  if (lastVisitValue != null){

    daysSinceLastVisit = Math.floor((today.getTime() - lastVisitValue) / DAY_IN_MILLIS)

    if (daysSinceLastVisit == 0){
      message = 'Back so soon? Awesome!'
    }
    else{
      if(daysSinceLastVisit == 1){
        message = 'You last visited 1 day ago'
      }
      else{
        message = `You last visited ${daysSinceLastVisit} days ago`
      }
    }
  }
  console.log(daysSinceLastVisit)
  localStorage.setItem(LAST_VISIT_DATE_KEY, `${today.getTime()}`)
  return message;
}
document.querySelector("#welcome-message").textContent = displayWelcome()
