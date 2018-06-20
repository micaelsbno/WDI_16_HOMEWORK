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
console.log(recipe.ingredients[0]);
console.log(recipe.ingredients[1]);
console.log(recipe.ingredients[2]);



//
// THE READING LIST
//

var book1 = {
  title: 'Lord of the Rings 1',
  author: 'J.R.R Tolkien',
  read: true,
}

var book2 = {
  title: 'Lord of the Rings 2',
  author: 'J.R.R Tolkien 2',
  read: false,
}

var book3 = {
  title: 'Lord of the Rings 3',
  author: 'J.R.R Tolkien again',
  read: false,
}

var readingList = [book1, book2, book3]


for (var i = 0; i < readingList.length; i++){
  console.log(readingList[i].title + ' by ' + readingList[i].author)
}

for (var i = 0; i < readingList.length; i++){
  if (readingList[i].read === true) {
  console.log('You already read ' + readingList[i].title + ' by ' + readingList[i].author)
  } else {
  console.log('You still need to read ' + readingList[i].title + ' by ' + readingList[i].author)
  }
}


// **
// THE MOVIE DATABASE
// **

var favoriteMovie = {
  title: 'The Holy Mountain',
  duration: 115,
  stars: ['Alejandro Jodorowsky', ' Horacio Salinas', ' Ramona Saunders', ' Juan Ferrara']
}

var message = favoriteMovie.title + ' lasts ' + favoriteMovie.duration + ' minutes. Stars: ' + favoriteMovie.stars;
  console.log(message)

var firstParagraph = document.querySelectorAll('p');
var newParagraph = document.createElement('p');
newParagraph.textContent = message;
firstParagraph[0].appendChild(newParagraph);