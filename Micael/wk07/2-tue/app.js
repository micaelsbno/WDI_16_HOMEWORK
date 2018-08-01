var main = m$('main')
var button = m$('#search')
var movies = m$('.movies')

function searchMovie(){
  hideContent()
  movie = m$('#movie-input').value
  miniAjax.search(movie)
}

function createSearch(movie) {
  var link = m$Create('a')
  var div = m$Create('div')
  div.className = 'search-item'
  var div2 = m$Create('div')
  div2.style = 'background-image: url(' + movie.Poster + ')'
  div2.className = 'search-item__image'
  var h4 = m$Create('h4')
  h4.textContent = movie.Title
  div.appendChild(div2)
  div.appendChild(h4)
  movies.appendChild(div)
}

function getMovie(movie) {
  hideContent()
  miniAjax.getMovie(movie)
}

function showMovie(movie) {
  var div1 = m$Create('div')
  div1.style = 'background-image: url(' + movie.Poster + ')'
  div1.className = 'movie__image'
  var div2 = m$Create('div')
  div2.className = 'movie__side'
  var h1 = m$Create('h1')
  h1.textContent = movie.Title
  var p = m$Create('p')
  p.textContent = movie.Plot
  var h3 = m$Create('h3')
  h3.textContent = 'Score ' + movie.Metascore
  movies.appendChild(div1)
  div2.appendChild(h1)
  div2.appendChild(p)
  div2.appendChild(h3)
  movies.appendChild(div2)
}

button.addEventListener('click', searchMovie)
movies.addEventListener('click', event => {
  getMovie(event.target.parentNode.querySelector('h4').textContent)
})
