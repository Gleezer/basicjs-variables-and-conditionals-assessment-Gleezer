// Exercise One - Computing a lifetime supply of your favorite snack!
//
// You just won a lifetime supply of your favorite snack.
//
// You are going to write a piece of code which will determine how much you
// will actually need to last the rest of your life.
//
// Step one:
// Prompt the user for three things.
// * The name of their favorite snack
// * The number of items of that snack they would eat in a day
// * Their current age.
//
// Store each of these things in descriptively named variables.
//
// Step Two:
// Calculate how many they would need to last them until they are 100!
//
// Hint: There are 365 days in a year.  Multiply that by the number of years until they are 100 years old.
// (100 minus their current age) That will give you the total number of days.
// Then multiply that by how many they would eat in a day.
//
// Store that number in a variable.  That is how many they will eat in their lifetime.
//
// Step Three:
// Print a sentence to the browser using document.write().
//
// Your sentence should describe how many of their snack they will eat.  Something like this:
//
// "Congratulations, you have won a lifetime supply of Snickers!<br/>You will receive 2 Snickers per day,
// for a grand total of 51100 Snickers."
//
// Concatenate together strings with your variables to form the message dynamically.
//
// Then test out your program with different numbers and snack!
//
// Write your code here 👇

let yourSnack = prompt("Please Enter your favorite snack")
let numTimesEat = prompt("How many of your favorite snack would you eat in a day?")
let curAge = prompt("Please enter your current age")

let subAge = 100 - curAge
let numDays = subAge * 365
let lifeEat = numDays * numTimesEat


document.write("Congratulations! You lucky person you!  You have won a lifetime supply of "
 + yourSnack
 + "!"
 + "<br/>You will receive " 
 + numTimesEat
 + " "
 + yourSnack
 + " per day, for a grand total of "
 + lifeEat.toLocaleString(1000000)
 + " "
 + yourSnack
 +". That you will receive till you are 100 years old!."
);