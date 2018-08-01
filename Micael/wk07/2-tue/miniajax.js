(() => {
  miniAjax = {
    search: () => {
      fetch('https://omdbapi.com/?s=' + movie + '&apikey=8026d01b'
      ).then(
      res => {
        return res.json()
      }).then(
      response => {
         response.Search.forEach(createSearch)
      })
    },
    getMovie: movie => {
      fetch('https://omdbapi.com/?t=' + movie + '&apikey=8026d01b'
        ).then (
        res => {
          return res.json()
      }).then (
      response => {
        showMovie(response)
      })
    }
  }
})()