///
/// THE RECIPE CARD
///

var recipe = {
  title: 'Mole',
  serves: 2,
  ingredients: ['cinnamon', 'cumin', 'cocoa']
}


console.log(recipe.title);
console.log('Serves: ' + recipe.serves);
console.log('Ingredients:');
console.log(recipe.ingredients.join('\n'));




//
// THE READING LIST
//

var books = [{
  title: 'Lord of the Rings 1',
  author: 'J.R.R Tolkien',
  alreadyRead: true,
},
{
  title: 'Lord of the Rings 2',
  author: 'J.R.R Tolkien 2',
  alreadyRead: false,
},
{
  title: 'Lord of the Rings 3',
  author: 'J.R.R Tolkien again',
  alreadyRead: false,
}];


//for (var i = 0; i < books.length; i++){
//  var book = books[i];
//  console.log(book.title + ' by ' + book.author)
//}

for (var i = 0; i < books.length; i++){
  var book = books[i];
  if (book.alreadyRead) {
  console.log('You already read ' + book.title + ' by ' + book.author)
  } else {
  console.log('You still need to read ' + book.title + ' by ' + book.author)
  }
}


// **
// THE MOVIE DATABASE
// **

var favoriteMovie = {
  title: 'The Holy Mountain',
  duration: 115,
  stars: ['Alejandro Jodorowsky', ' Horacio Salinas', ' Ramona Saunders', ' Juan Ferrara'],

}

var movieInfo = function(movie) {
  console.log(movie.title + ' lasts for ' + movie.duration + ' minutes, stars ' + movie.stars.join(',') ) 
};