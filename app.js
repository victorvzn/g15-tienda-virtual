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

async function fetchProductsByCategory(categoryName) {
  const url = 'https://dummyjson.com/products/category/smartphones'

  // ...
}

function renderCategories(categories) {
  // console.log('Renderizando categorias!!!!', categories)
  const categoriesSection = document.querySelector('.categories')

  let categoryButtons = ''

  categories.forEach(category => {
    categoryButtons += `<button>${category}</button>`
  })

  categoriesSection.innerHTML = categoryButtons

  const buttons = document.querySelectorAll('button')

  buttons.forEach(button => {
    button.addEventListener('click', event => {
      const textButton = event.target.textContent

      console.log(textButton)
    })
  })
}

async function initApp () {
  const categories = await fetchCategories() // Retorna una promesa
  
  console.log(categories)

  renderCategories(categories)
}

initApp()
// fetchProducts()