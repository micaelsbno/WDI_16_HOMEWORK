// 1. Build your own concatenation
// Write a function named combineWords that: 
// - return a new string that is the combination of the two parameters
// Example: combineWords('dog', 'house') => 'doghouse'

function combineWords(word1, word2) {
  return word1.concat(word2);
}
var result = combineWords('dog', 'house');
console.log(result);
// displays 'doghouse'

// 2. Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 100 or 101"
// - Call the function three times with different sets of values.

function calculateAge(birthYear, currentYear) {
  var message = 'You are either ' + (currentYear - birthYear - 1) + ' or ' + (currentYear - birthYear);
  console.log(message);
}

calculateAge(1991, 2018);
calculateAge(1971, 2018);
calculateAge(1981, 2018);

//  3. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

var fruits = ['orange', 'feijoa', 'blackberry'];

function lengths(array) {
  var lengthsArray = [];

  array.forEach(function(elem) {
    lengthsArray.push(elem.length)
  })

  return lengthsArray;
}

console.log(lengths(fruits));

// 4. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

function transmogrified(x, y, z) {
  var result = x * y;
  return (Math.pow(result, z));
}

console.log(transmogrified(2, 3, 4));


// 5. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.
// Example: wordReverse('we are good friends') => 'friends good are we'

var wordReverse = function (string) {
  
  var separateLetters = string.split(''); 
  
  var reverseArray = separateLetters.reverse();
  
  var reverseWord = reverseArray.join('');
  return reverseWord;
}

console.log('Dollars reversed is ' + wordReverse('Dollars'));