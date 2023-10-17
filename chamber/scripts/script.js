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
