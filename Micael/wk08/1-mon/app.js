
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