const fruitselect1 = document.getElementById('fruit1')
const fruitselect2 = document.getElementById('fruit2')
const fruitselect3 = document.getElementById('fruit3')
const savebutton = document.getElementById('savebutton')
const fruitpath = '../data/fruit.json'

function getfruitdata() {
    fetch(fruitpath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(fruitdata => {
            displayfruits(fruitdata);
        })
        .catch(error => {
            console.error('Error fetching fruit data:', error);
        });
}

function displayfruits(fruitdata) {
    console.log(fruitdata)
    fruitdata.forEach(fruit => {
        let fruitname = fruit.name
        const optionElement1 = document.createElement("option");
        const optionElement2 = document.createElement("option");
        const optionElement3 = document.createElement("option");


        optionElement1.value = fruitname;
        optionElement1.textContent = fruitname;

        optionElement2.value = fruitname;
        optionElement2.textContent = fruitname;

        optionElement3.value = fruitname;
        optionElement3.textContent = fruitname;

        fruitselect1.appendChild(optionElement1)
        fruitselect2.appendChild(optionElement2)
        fruitselect3.appendChild(optionElement3)
    });
}
savebutton.addEventListener('click', ()=>{
    var params = new URLSearchParams(window.location.search);


    let fruit1 = document.getElementById('fruit1').value
    let fruit2 = document.getElementById('fruit2').value
    let fruit3 = document.getElementById('fruit3').value
    let fname = document.getElementById('firstname').value
    let lname = document.getElementById('lastname').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let extraDirections = document.getElementById('extraDirections').value

    params.set('fruit1', fruit1)
    params.set('fruit2', fruit2)
    params.set('fruit3', fruit3)
    params.set('fname', fname)
    params.set('lname', lname)
    params.set('email', email)
    params.set('phone', phone)
    params.set('extraDirections', extraDirections)

    history.pushState(null, '', '?' + params.toString());
})

getfruitdata();
