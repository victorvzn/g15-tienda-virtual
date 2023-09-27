// alert('Hola G15!')
console.log('Hola G15!')

const urlCategories = 'https://dummyjson.com/products/categories'
const urlProducts = 'https://dummyjson.com/products'

function fetchCategories() {
  fetch(urlCategories) // Devuelve una promesa
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
}

async function fetchProducts() {
  const response = await fetch(urlProducts) // Devuelve una Response

  const data = await response.json() // Devuelve una promise
  
  console.log(data)
}

fetchCategories()
fetchProducts()