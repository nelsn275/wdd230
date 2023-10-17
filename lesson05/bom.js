const myinput = document.querySelector('#favchap')
const mybutton = document.querySelector('#mybutton')
const mylist = document.querySelector('#list')

mybutton.addEventListener('click', ()=>{
    if (myinput.value == ''){
        myinput.focus()
        return
    }

    let listItem = document.createElement('li')
    let deleteButton = document.createElement('button')

    listItem.textContent = myinput.value
    deleteButton.textContent = '❌'

    listItem.appendChild(deleteButton)

    mylist.appendChild(listItem)

    deleteButton.addEventListener('click', ()=>{
        listItem.remove()
    })
    myinput.focus()
    myinput.value = ''

})