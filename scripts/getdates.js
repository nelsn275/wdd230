// Nav
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});


// Date
const today= new Date();
document.querySelector('#currentyear').textContent = today.getFullYear();
document.querySelector('#lastmodified').textContent = document.lastModified;


