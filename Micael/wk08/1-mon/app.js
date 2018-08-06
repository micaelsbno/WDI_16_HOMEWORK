
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