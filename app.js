// alert('Hola G15!')
console.log('Hola G15!')

const urlCategories = 'https://dummyjson.com/products/categories'
const urlProducts = 'https://dummyjson.com/products'

function fetchCategories() {
  return fetch(urlCategories) // Devuelve una promesa
    .then(response => response.json())
    // .then(data => {
    //   console.log(data)
    // })
}

async function fetchProducts() {
  const response = await fetch(urlProducts) // Devuelve una Response

  const data = await response.json() // Devuelve una promise
  
  console.log(data)
}

function renderCategories(categories) {
  // console.log('Renderizando categorias!!!!', categories)
  const categoriesSection = document.querySelector('.categories')

  let categoryButtons = ''

  categories.forEach(category => {
    categoryButtons = categoryButtons + `<button>${category}</button>`
  })

  categoriesSection.innerHTML = categoryButtons
}

async function initApp () {
  const categories = await fetchCategories() // Retorna una promesa
  
  console.log(categories)

  renderCategories(categories)
}

initApp()
// fetchProducts()