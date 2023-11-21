let banner = document.getElementById('banner')

let now = new Date()
today = now.getDay()

if (today != 1 && today != 2 && today != 3){
    banner.style.display = 'none'
}

