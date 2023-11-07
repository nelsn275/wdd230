let joinButton = document.getElementById('join')

joinButton.addEventListener('click',  ()=>{
    window.location.href = 'thank-you.html'
})

const formdate = new Date()
document.getElementById('timestamp').value = formdate.toString()