function addBottle() {
  bottle = document.createElement('img')
  bottle.setAttribute('src', 'https://orig00.deviantart.net/d563/f/2017/343/d/b/legend_of_zelda_revamp_by_myedgedrawings-dbw9ix6.gif')

  document.querySelector('.bottles').appendChild(bottle)
}

number = Number(document.querySelector('p').textContent.split(' ')[0])

for (i = 0; i < number/10; i++) {
  addBottle()
}