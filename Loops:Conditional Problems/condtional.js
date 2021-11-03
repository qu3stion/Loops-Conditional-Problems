// A)
//       1) Given the array,
//       Let lunchArray = [ “Burger”, “Salad”, “Lasagna”, “Sushi”, “Meatloaf” ]
// Loop through the array to find the longest word by how many letters each string contains.
// Which other variables will you be needing?
//       2) Print the length of the longest word to the console.
//       3) Print the longest word to the console.
//       4) Now what if the array was
// Let lunchArray = [ “Burger  Salad  Lasagna Sushi  Meatloaf” ]
// Since all the words are in one string together, how would you solve this?

let lunchArray = [ 'Burger', 'Salad', 'Lasagna', 'Sushi', 'Meatloaf' ]
function longestWord(str) {
  let longest = ''
  console.log(str.length);
  console.log(str);
for (let i = 0; i < lunchArray.length; i++) {
if (lunchArray[i].length > longest.length)
  longest = lunchArray[i];
  }
 return longest;
}
longestWord('Burger', 'Salad', 'Lasagna', 'Sushi', 'Meatloaf')

// B) Write a function that returns elements on odd positions in a list.
let arr1 = ["1", "5", "73", "59"]

function retOdd(arr1) {
  let odd = (arr1.filter((num, i) => i % 2 === 1)) // filter the array to get the odd positions
  console.log(odd);
}
retOdd(arr1)
// C) Function factorial(n) {}
//      Compute the factorial of any given number.

function factorialize(num) {
  let result = num; // variable to store num
  if (num === 0 || num === 1)
    return 1;
  while (num > 1) {
    num--; //decreases by 1 each iteration
    result = result * num;
  }
  console.log(result)
  return result;
}
factorialize(10)

// D) Conditional Practice
// Write an if statement and determine a condition where:
// If mpg is less than or equal to 10, console “gas guzzler”
// If mpg is  between 11 - 16, console “Planet still frowns upon this, and so does your wallet”
// If mpg is between 17-20, console “ it’s palpable”
// If mpg is between 21-29, console “ Atmosphere smiles at your decision”
// If mpg is between 30-35, console “ Not many gas stops will be taken”
// If mpg is above 35 console “ The fish of the sea smile at your conservation”
// If mpg is 120 console “/if you are using the Tom Ogle fuel system, props”
// After testing each one, change the mpg variable to ensure it is good.
function condish(mpg){
  let speed = mpg; //store variable
if (mpg <= 10) {
  console.log('Gas Guzzler')
} else if (mpg >= 11 && mpg <= 16) {
  console.log('The planet still frowns upon this, and so does your wallet!')
} else if (mpg >= 17 && mpg <= 20) {
  console.log("It's palpable..")
} else if (mpg >= 21 && mpg <= 29) {
  console.log("The atmosphere smiles at your decision!");
} else if (mpg >= 30 && mpg <= 35) {
  console.log("Not many gas stops will be taken.");
} else if (mpg > 35 && mpg != 120) {
  console.log("The fish in the sea smile at your conservation.");
} else {
  console.log("If you are using the Tom Ogle fuel system... props!");
}
console.log(speed)
return speed;
}
condish(13)
condish(120)
condish(67)
