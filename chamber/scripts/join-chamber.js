let joinButton = document.getElementById('join')

joinButton.addEventListener('click',  ()=>{
    if (window.location.href == 'https://nelsn275.github.io/wdd230/chamber/index.html' ){
        window.location.href = 'join.html'
    }
    else{
        window.location.href = 'thank-you.html'
    }
})
if (window.location.href == 'https://nelsn275.github.io/wdd230/chamber/index.html'){
    const formdate = new Date()
    document.getElementById('timestamp').value = formdate.toString()
}
