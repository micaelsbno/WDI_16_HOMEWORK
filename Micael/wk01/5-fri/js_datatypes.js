typeof 15
// Prediction: number
// Actual: number

typeof 5.5
// Prediction: number
// Actual: number

typeof NaN
// Prediction: number
// Actual: number

typeof "hello"
// Prediction: string
// Actual: string

typeof true
// Prediction: boolean
// Actual: boolean

typeof 1 != 2
// Prediction: boolean
// Actual: true // (1 != 2) = boolean


"hamburger" + "s"
// Prediction: string
// Actual: strings // ("hamburger" + "s") = string

"hamburgers" - "s"
// Prediction: NaN
// Actual: NaN // ("hamburgers" - "s") = number

"1" + "3"
// Prediction: string
// Actual: string3 // ("1" + "3") = string

"1" - "3"
// Prediction: NaN
// Actual: NaN // ("1" - "3") = number

"johnny" + 5
// Prediction: string5
// Actual: string5 // ("johnny" + 5) = string

"johnny" - 5
// Prediction: NaN
// Actual: NaN // ("johnny" - 5) = number

99 * "luftbaloons"
// Prediction: NaN
// Actual: NaN // (99 * "luftbaloons") = number




// Arrays
// Javascript provides us with a number of native methods that allow us to interact with arrays. Find methods that do each of the following and provide an example...

var fruits = ['orange', 'feijoa', 'strawberry'];
// Add an element to the back of an array.
fruits.push('grape');
// Remove an element from the back of an array.
fruits.pop();
// Add an element to the front of an array.
fruits.unshift('apple');
// Remove an element from the front of an array.
fruits.shift();
// Concatenates all the elements in an array into a string.
var jointFruits = fruits.join(',');
// Separates the characters of a string into an array. This one is a string method.
var splitFruits = jointFruits.split(',');
// This is a great exercise for practicing your "Google Fu"! If you need a starting point, check out MDN's documentation page on arrays.





// What will the contents of the below arrays be after the code samples are executed? Come up with an answer yourself before testing it out in the console.

var numbers = [2, 4, 6, 8]
numbers.pop()
numbers.push(10)
numbers.unshift(3)
//[3, 2, 4, 6, 10]


// What is the return value of the below code sample? Come up with an answer yourself before testing it out in the console.

var morse = ["dot", "pause", "dot"]
var moreMorse = morse.join(" dash ")
moreMorse.split(" ")

//["dot","dash", "pause", "dash", "dot"]

// What will the contents of the below array be after the below code sample is executed? Come up with an answer yourself before testing it out in the console.

var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles)
bands.unshift(stones)
bands[bands.length - 1].pop()
bands[0].shift()
bands[1][3] = "Ringo"

//[["Mick", "Keith", "Ronnie", "Charlie"], ["Paul", "John", "George", "Ringo"]]


// Booleans & Comparison Operators
// Here's an example truth table for the ! (not) operation. In it, we're listing the values of !a that correspond with a given value of a.

// a !a
// true  false
// false true
// Fill out the truth tables below for && (and), || (or) and one that uses multiple comparison operators. All you need to do is replace the ?'s with either true or false.

// NOTE: Because of markdown formatting, || and && have been replaced with OR and AND respectively.

// HINT: With the last one, it may be helpful to add additional columns to the table for each individual comparison.

// a      b     a AND b
// true  true  true
// true  false false
// false true  false
// false false false

// a      b     a OR b
// true  true  true
// true  false true
// false true  true
// false false false
 
// a  b   a != b
// 3  3   false
// 1  5   true
// 2 "2"  false

// a      b     !a AND (a OR b)
// true  true   false
// true  false  false
// false true   true
// false false  false

// Conditionals
// You're a bouncer at a bar. Given an age variable, create a conditional that satisfies the following requirements...

// If a patron is older than 21, print out "Come on in!".
// If a patron is between 18 and 21, print out "Come on in (but no drinking)!".
// If a patron is younger than 18, print out "You're too young to be in here!".
// If a patron is older than 75, print out "Are you sure you want to be here?".
// // Your answer goes here.
// Bonus
// Bar patrons must have an ID if the bouncer is even going to consider what age they are.

// If the patron has an ID, the bouncer will then check if they are of the proper age
// If the patron does not have an ID, the bouncer will tell them "No ID, no entry."
// Hint: Whether the patron has an ID or not can be stored in a hasId variable. What do you think the stored data type should be?

var hasId = true;
var patron = 77;

if (hasId){
  if (patron > 75) {
    console.log("Are you sure you want to be here?")
  } else if (patron >= 21) {
    console.log("Come on in!")
  } else if (patron < 21 && patron >= 18) {
    console.log("Come on in (but no drinking)!")
  } else if (patron < 18) {
    console.log("You're too young to be here!")
  }
} else {
  console.log("No ID, no entry")
}

// Bonus: Fizz-Buzz
// Fizz-Buzz is a classic coding exercise that you can create using your knowledge of conditionals and loops. Implement code that does the following...

// Counts from 1 to 100 and prints out something for each number.
// If the number is divisible by 3, print "Fizz".
// If the number is divisible by 5, print "Buzz".
// If the number is divisible by both 3 and 5, print "FizzBuzz".
// If the number does not meet any of the above conditions, just print the number.
// Your output should look something like this...

// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...
// // Your answer goes here.
// Bonus (for the bonus)
// Encapsulate all of your logic into a function, so that each iteration of the game will trigger function calls that look something like these...
// fizzBuzz(1)
// // => prints "1" to the console

// fizzBuzz(3)
// // => prints "3" to the console

// fizzBuzz(15)
// // => prints "FizzBuzz" to the console

for (i = 0; i <= 100; i++){
  if (i % 15 === 0) {
    console.log("FizzBuzz")
  } else if (i % 3 === 0) {
    console.log("Fizz")
  } else if (i % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(i)
  }

// JUST FOR BUZZ
// for (var i=0; i < 100;)
//   console.log(( ++i%3 ? '' : 'Fizz') + ( i%5 ? '' : 'Buzz') || i)




