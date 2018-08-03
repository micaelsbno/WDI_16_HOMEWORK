input = m$('input')
main = m$('.gifs')
button = m$('button')

function searchAjax(word) {
  fetch('https://api.giphy.com/v1/gifs/search?api_key=KY7okl85hAQvYdCqBo11nR3BuS158Sy2&q=' + word + '&limit=' + limit +'&offset=0&rating=G&lang=en').then(
      res => res.json()
    ).then(
      res =>  { 
        return showSearch(res)
      }
    )
}

function showSearch(response) {
  for (i = m$$('.gif').length; i < response.data.length; i++){
    gif = m$Create('img')
    gif.className = 'gif'
    gif.src = response.data[i].images.fixed_height.url
    main.appendChild(gif)
  }
  limit += 10
}


input.addEventListener('keyup', () => {
  if (event.key === "Enter") {
    main.innerHTML = ''
    limit = 10
    searchAjax(input.value)
  }
})

button.addEventListener('click', () => {
  main.innerHTML = ''
  limit = 10
  searchAjax(input.value)
})

document.addEventListener('scroll', () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    searchAjax(input.value)
  }
})