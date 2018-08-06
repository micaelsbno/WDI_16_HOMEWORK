
brushColor = ''
function setColor(){
  brushColor = document.querySelector('.brush').value
  return brushColor
}

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
    document.querySelector('main').appendChild(div)
  }
}