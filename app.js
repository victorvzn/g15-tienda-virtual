// alert('Hola G15!')
console.log('Hola G15!')

const urlCategories = 'https://dummyjson.com/products/categories'
const urlProducts = 'https://dummyjson.com/products'

async function fetchCategories() {
  const response = await fetch(urlCategories)

  const data = await response.json()

  console.log(data)
}

async function fetchProducts() {
  const response = await fetch(urlProducts) // Devuelve una Response

  const data = await response.json() // Devuelve una promise
  
  console.log(data)
}

fetchCategories()
fetchProducts()