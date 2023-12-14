function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
const fruitpath = '../data/fruit.json'
let carbohydrates = 0
let protein = 0
let fat = 0
let sugar = 0
let calories = 0
    
const firstName = getParameterByName('firstName')
const email = getParameterByName('email')
const phone = getParameterByName('phone')
const fruit1 = getParameterByName('fruit1')
const fruit2 = getParameterByName('fruit2')
const fruit3 = getParameterByName('fruit3')
const extraDirections = getParameterByName('extraDirections')

const orderDetails = document.getElementById('order-details')
orderDetails.innerHTML = `
    <p><strong>Name:</strong> ${firstName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Fruit Choices:</strong> ${fruit1}, ${fruit2}, ${fruit3}</p>
    <p><strong>Special Instructions:</strong> ${extraDirections}</p>
  `
const orderDate = new Date();
orderDetails.innerHTML += `<p><strong>Order Date:</strong> ${orderDate.toLocaleString()}</p>`

getnutrientinfo(fruit1)
getnutrientinfo(fruit2)
getnutrientinfo(fruit3)

async function getfruitdata() {
    try {
      const response = await fetch(fruitpath);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const fruitdata = await response.json();
      return fruitdata;
    } catch (error) {
      console.error('Error fetching fruit data:', error);
      throw error;
    }
  }

    function calcnutritioninfo(nutritioninfo){
        calories += nutritioninfo.calories
        fat += nutritioninfo.fat
        sugar += nutritioninfo.sugar
        carbohydrates += nutritioninfo.carbohydrates
        protein += nutritioninfo.protein
    }

    function getnutrientinfo(fruitname) {
        try {
          const fruitdata = getfruitdata();
          console.log(`FRUITDATA ${fruitdata}`)  
      
          fruitdata.forEach(fruit => {
            if (fruit.name === fruitname) {
              calcnutritioninfo(fruit.nutrition);
            }
          });

        } catch (error) {
          console.error('Error:', error);
        }
      }
orderDetails.innerHTML += `
<p><strong>Total Carbohydrates:</strong> ${carbohydrates} g</p>
<p><strong>Total Protein:</strong> ${protein} g</p>
<p><strong>Total Fat:</strong> ${fat} g</p>
<p><strong>Total Sugar:</strong> ${sugar} g</p>
<p><strong>Total Calories:</strong> ${calories} kcal</p>
`


