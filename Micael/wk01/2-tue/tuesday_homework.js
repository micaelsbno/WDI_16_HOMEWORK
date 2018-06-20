//fortune teller

var childrenNumber = prompt("How many kids?");
var partnersName = prompt("Who's your partner?");
var geoLocation = prompt("Where do you live?");
var jobTitle = prompt("What's your jobs?");
var message = 'You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' + partnersName + ' with ' + childrenNumber + ' kids';

console.log(message);


//age calculator

var date = new Date();
var year = date.getFullYear();
var userAge = prompt("Which year were you born?");
var age = year - Number(userAge); 
var ageBeforeBirthDay = year - Number(userAge) - 1;
var message = "You are either " + ageBeforeBirthDay + " or " + age;
console.log(message);

//lifetime supply --- wrong

var currentAge = prompt("What's your current age?");
var currentDays = Number(currentAge) * 365;
var maximumAge = prompt("How long do you want to live?");
var maximumDays = Number(maximumAge) * 365;
var snacksPerDay = 2;
var daysRemaining = currentDays - maximumDays
var totalMuchies = daysRemaining / snacksPerDay;

console.log("You will need " + totalMuchies + " to last you until the ripe old age of " + maximumAge );

//odd even

for (i = 0; i <= 20; i++) {
  if (i % 2 === 0){
  console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

//multiplication table

var b = 1;
for (i = 0; i <= 10;){
    var result = i * b;
    console.log(i + " * " + b + " = " + result);
    b += 1;
    if (b % 10 === 0) { 
        i ++
        b = 1;}      
}

 
//or

for (var i = 0; i <= 10 ; i++) {
  for (j = 1; j <= 10; j++) {
    console.log(i * j);
  }
};


//top choices

var topColors = ['blue', 'green', 'yellow'];
var suffix = ['st', 'nd', 'rd']
for (var i = 0; i < topColors.length; i++) {
    console.log("My " + (i+1) + suffix[i] + " choice is " + topColors);
}



