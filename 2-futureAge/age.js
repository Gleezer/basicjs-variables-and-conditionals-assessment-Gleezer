// Exercise Two - Calculating your future age.
//
// You want to know how old you will be in any given year.  Create a piece of code that will computer
// your age given your birth year and a year in the future.
//
// Step One:
// prompt for the year the user was born.  Then prompt them for a year in the future.
// Store both of these in descriptively named variables.
//
// Step Two:
// Calculate the two possible ages for that year based on their inputs.
//
// For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//
// Store the two possible ages in two different variables.
//
// Step Three:
// Create a variable called message which describes the result.
// "I will be either NN or NN in YYYY", substituting the values.
//
// Step Four:
// Print your message to the browser using document.write()
//
// Write your code here 👇

let yearBorn = prompt("Please enter the year you were born:")
let yearInput = prompt("Please in put a year into the future:")

let yourYear = yearInput - yearBorn
// console.log(yourYear)
let yourYear2 = yourYear - 1
//console.log(yourYear2)
let message = (`I will either be ${yourYear} or ${yourYear2} in ${yearInput}! <br/> Wow thats old!`)
//console.log(message)
document.write(message)