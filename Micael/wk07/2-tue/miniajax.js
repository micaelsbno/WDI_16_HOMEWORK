miniAjax = {
  search: function(){
    fetch('https://omdbapi.com/?s=' + movie + '&apikey=8026d01b'
    ).then(
    function(res){
      return res.json()
    }).then(
    function(response){
       response.Search.forEach(createMovie)
    })
  },
  getMovie: function (movie){
  fetch('https://omdbapi.com/?t=' + movie + '&apikey=8026d01b'
    ).then (
    function(res){
      return res.json()
  }).then (
  function(response){
    showMovie(response)
  })
}
}