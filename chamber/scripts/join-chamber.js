let joinButton = document.getElementById('join')
console.log(window.location.href)

joinButton.addEventListener('click',  ()=>{
    if (window.location.href == 'index.html' ){
        window.location.href = 'join.html'
    }
    else{
        window.location.href = 'thank-you.html'
    }
})
if (window.location.href == 'join.html'){
    const formdate = new Date()
    document.getElementById('timestamp').value = formdate.toString()
}
