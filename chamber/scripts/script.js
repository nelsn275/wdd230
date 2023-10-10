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
