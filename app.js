//const form = document.querySelector('form#userForm')
const addMovie = function(ev) {
    ev.preventDefault()
    const movieName = form.movieName.value
    const users = document.querySelector('#users')

    const list = document.createElement('ul')
    const listOfMovies = document.createElement('li')
    listOfMovies.textContent = `${movieName}`
  
    users.appendChild(list)

    list.appendChild(listOfMovies)
    form.reset()
    form.movieName.focus()
}
const array = []
const form = document.querySelector('#userForm')
form.addEventListener('submit', addMovie)