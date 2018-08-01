(() => {
  miniAjax = {
    search: () => {
        fetch('https://omdbapi.com/?s=' + movie + '&apikey=8026d01b'
      ).then(
        res => res.json()
      ).then(
        response => {
        movies.innerHTML = ''
        response.Search.forEach(createSearch)
        showContent()
      })
    },
    getMovie: movie => {
      fetch('https://omdbapi.com/?t=' + movie + '&apikey=8026d01b'
        ).then (
        res => {
          return res.json()
      }).then (
      response => {
        movies.innerHTML = ''
        showMovie(response)
        showContent()
      })
    }
  }
})()