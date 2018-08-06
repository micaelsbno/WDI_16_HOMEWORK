
brushColor = ''
function setColor(){
  brushColor = document.querySelector('.brush').value
  return brushColor
}

main = document.querySelector('main')

document.querySelector('.brush').addEventListener('keyup', () => {
  if (event.key === 'Enter') {
    setColor()
  }
})

document.querySelector('button').addEventListener('click', setColor)

function createSquares() {
  for (i = 0; i < 1000; i++) {
    var div = document.createElement('div')
    div.className = 'square'
    main.appendChild(div)
  }
}

createSquares()

function changeGreen(target) {
  target.style = 'background-color: ' + brushColor   
}

main.addEventListener('mouseover', () => {
  changeGreen(event.target)
})


function addMoviePoster() {
  movie = document.querySelector('.movie-input').value
  fetch('http://www.omdbapi.com/?t=' + movie + '&apikey=8026d01b')
  .then( response => response.json() )
  .then( response => {
    addBackground(response)
  });
}

function addBackground(json){
  body = document.querySelector('body')
  body.style = 'background-image: url(' + json['Poster'] + ')'
}

document.querySelector('.movie-input').addEventListener('keyup', () => {
  if (event.key === 'Enter') {
    addMoviePoster()
  }
})

document.querySelector('.movie-button').addEventListener('click', addMoviePoster)