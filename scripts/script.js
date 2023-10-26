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



// Site Visits
const VISITS_KEY = 'site-visits'

function getSiteVisits(){
	let currValue = localStorage.getItem(VISITS_KEY)
	let siteVisits = 1

	if (currValue != null){
		siteVisits = parseInt(currValue) + 1
	}
	localStorage.setItem(VISITS_KEY, `${siteVisits}`)
	return siteVisits
}

document.getElementById('visitcount').textContent = `${getSiteVisits()}`



