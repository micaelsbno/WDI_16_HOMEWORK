var main = document.querySelector('main')

function searchMovie(){
  movie = document.getElementById('movie-input').value
  microAjax({
    url: 'https://omdbapi.com/?s=' + movie + '&apikey=8026d01b' ,
    method: 'GET',
    success: function(res) {
      main.innerHTML = ''
      res.Search.forEach(createMovie)
    }
  })
}

function createMovie(movie) {
  var link = document.createElement('a')
  var div = document.createElement('div')
  div.className = 'search-item'
  var div2 = document.createElement('div')
  div2.style = 'background-image: url(' + movie.Poster + ')'
  div2.className = 'search-item__image'
  var h4 = document.createElement('h4')
  h4.textContent = movie.Title
  div.appendChild(div2)
  div.appendChild(h4)
  main.appendChild(div)
}

button = document.getElementById('search')
button.addEventListener('click', searchMovie)


function getMovie(movie){
  microAjax({
    url: 'https://omdbapi.com/?t=' + movie + '&apikey=8026d01b' ,
    method: 'GET',
    success: function(res) {
      showMovie(res)
    }
  })
}

function showMovie(movie) {
  main.innerHTML = ""
  var div1 = document.createElement('div')
  div1.style = 'background-image: url(' + movie.Poster + ')'
  div1.className = 'movie__image'
  var div2 = document.createElement('div')
  div2.className = 'movie__side'
  var h1 = document.createElement('h1')
  h1.textContent = movie.Title
  var p = document.createElement('p')
  p.textContent = movie.Plot
  var h3 = document.createElement('h3')
  h3.textContent = 'Score ' + movie.Metascore
  main.appendChild(div1)
  div2.appendChild(h1)
  div2.appendChild(p)
  div2.appendChild(h3)
  main.appendChild(div2)
}

main.addEventListener('click', function(event){
  getMovie(event.target.parentNode.querySelector('h4').textContent)
})
