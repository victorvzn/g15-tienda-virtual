// alert('Hola G15!')
console.log('Hola G15!')

const url = 'https://dummyjson.com/products'

async function fetchProducts() {
  const response = await fetch(url) // Devuelve una Response

  const data = await response.json() // Devuelve una promise
  
  console.log(data)
}

fetchProducts()