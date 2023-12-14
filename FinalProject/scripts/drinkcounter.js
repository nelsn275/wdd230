const counterValue = localStorage.getItem('drinkCounter') || 0;
const message = document.getElementById('congrats')

document.getElementById('counterDisplay').textContent = `${counterValue}`;