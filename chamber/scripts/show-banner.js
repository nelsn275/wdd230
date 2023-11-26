let banner = document.getElementById('banner')
let x = document.getElementById('x')

let now = new Date()
let today = now.getDay()

function removeBanner() {
    banner.style.display = 'none'
}

if (today != 1 && today != 2 && today != 3){
    removeBanner()
}

x.addEventListener('click', () => {
    removeBanner()
})



