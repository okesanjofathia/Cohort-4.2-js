/**
 * Control Flow 
 * Learn how to use keywords such asif, else if, else, switch, and ternary syntax to  
 * control the flow of a program in Javascript.
 * In another word, rendering some statement/expression
 *  based on single or multiple conditions.
 */

/**
 * If Statement
 */
let condition = true; 
if (condition) {
  // do something
  console.log("I am a truthy value");
}

/**
 * IF STATEMENT
 * EXAMPLE 2
 */
let isUsers = true;
let isAdmin = false;
let isAuthenticated = true; 
if (isUsers && isAuthenticated) {
  console.log("You can now purchase gadgets on our platform")
}

// CLASSWORK
let isCloudy = false;
let isSunny = true;
if (isCloudy || isSunny) {
console.log("It is not Cloudy")
}

/**
 * else statement
 */
if (isAdmin && isAuthenticated) {
  console.log("You can only explore our products")
} else {
  console.log("You need to be an administrator ")
}

console.log("== CLASSWORK ==")
let isRegistered = true;
let isVerified = false;
if (isRegistered && isVerified) {
  console.log("You can proceed into the hall");
} else {
  console.log("You are not allowed to enter");
}

/**
 * if, else if and else statement
 */
if (isAdmin && isAuthenticated) {
  console.log("You must be an admin and authenticated");
}
else if( !isAdmin && isAuthenticated){
console.log("You can coordinate users on our platform");
}
else{
console.log("Contact the owner of the platform");
}

// classwork
let age = 15; 
 if (age > 13){
console.log("A teenager");
}
else if(age >= 18){
  console.log("Adult");
}
else{
  console.log("A pre-teen");
}
/**
 * Switch Statement: Handling Multiple conditions/cases
 * Better maintainance multiple conditions
 */
/**
 * Get days of the week using switch statement
 */
let randomNumbers  = Math.random() * 6 + 1;
let convertedRandomnumbers = Math.floor(randomNumbers);
console.log("RandomNumbers ==>",randomNumbers);
console.log("ConvertedRandomNumbers ==>",convertedRandomnumbers);
switch (convertedRandomnumbers) { 
  case 1:
    console.log("You won a water bottle");
    break;

  case 2:
    console.log("You won a T-Shirt");
    break;

  case 3:
    console.log("You won $10");
    break;

  case 4:
    console.log("You won a sneakers");
    break;

  case 5:
    console.log("You won a pen");
    break;

  case 6:
    console.log("You won a laptop");
    break;

  default:
    console.log("No gift available for you")
    break;
}
/**
 * CLASSWORK
 */
let currentMonthofTheyear = new Date().getMonth() 
console.log(currentMonthofTheyear)
switch (currentMonthofTheyear) {
  case 0:
    console.log("The current month is January");
    break;
  case 1:
    console.log("The current month is February");
    break;
  case 2:
    console.log("The current month is March");
    break;
  case 3:
    console.log("The current month is April");
    break;
  case 4:
    console.log("The current month is May");
    break;
  case 5:
    console.log("The current month is June");
    break;
  case 6:
    console.log("The current month is July");
    break;
  case 7:
    console.log("The current month is August");
    break;
  case 8:
    console.log("The current month is September");
    break;
  case 9:
    console.log("The current month is October");
    break;
  case 10:
    console.log("The current month is November");
    break;
  case 11:
    console.log("The current month is December");
    break; 

  default:
    console.log("No available month")
    break;
}
/**
 * Tenary Syntax
 * condition? "do something" : "do another thing"
 */
let firstName = "female"
firstName.length % 3 === 2 
? console.log("This is my firstname character")
: console.log("This is not my firstname character")
/**
 * classwork
 * get the current time, date 
 * use if statement to get the minimum age to vote 
 */
let currentDateandTime = new Date().toLocaleString();
console.log(currentDateandTime);

let voterAge = 18
 if (voterAge >= 18) {
   console.log("You are eligible to vote"); 
  }
   else{
   console.log("You are not eligible to vote ");
 }
 /**
  * CLASSWORK
  * Use control flow to classify student grade based on their scores
  * 70 - 100 grade A
  * 60 - 69 grade B
  * 50 - 59 grade C
  * 40 - 49 grade D
  * 30 - 39 grade E
  * 0 - 29 grade F
  */
let maximumScore = 100;
let getStudentscore = Math.random() * 101; 
let convertedStudentscore = Math.floor(getStudentscore)
console.log(getStudentscore)
console.log(convertedStudentscore);
switch (true) {
  case convertedStudentscore >= 70 && convertedStudentscore <= 100:
    console.log( `You scored ${convertedStudentscore} and your Grade is A`)
    break; 
    case convertedStudentscore >= 60 && convertedStudentscore <= 69:
    console.log( `You scored ${convertedStudentscore} and your Grade is B`)
    break;
     case convertedStudentscore >= 50 && convertedStudentscore <= 59:
    console.log( `You scored ${convertedStudentscore} and your Grade is c`)
    break;
     case convertedStudentscore  >= 40 && convertedStudentscore <= 49: 
    console.log( `You scored ${convertedStudentscore} and your Grade is D`)
    break;
    case convertedStudentscore  >= 30 && convertedStudentscore <= 39:
    console.log( `You scored ${convertedStudentscore} and your Grade is E`)
    break;
     case convertedStudentscore >= 0 && convertedStudentscore <= 29:
    console.log( `You scored ${convertedStudentscore} and your Grade is F`)
    break;
  default:
    console.log("Your score is with-held")
    break;
}
/**
 * Classwork
 * Calculate the final student grade based on midterm test score, assignment score and final exam score
 * use control flow to grade students based on the score obtained
 */
let maxScore = 100;
let assignmentScore = Math.floor(Math.random() * 101);
let midtermScore = Math.floor(Math.random() * 101);
let finalexamScore = Math.floor(Math.random() * 101);
let totalScore = Math.floor(
  (assignmentScore + midtermScore + finalexamScore) / 3
);
console.log(totalScore)
switch (true) {
  case totalScore >= 70 && totalScore <= 100:
    console.log(`You scored a total of ${totalScore} and your grade is A`);
    break;
  case totalScore >= 60 && totalScore <= 69:
    console.log(`You scored a total of ${totalScore} and your grade is B`);
    break;
  case totalScore >= 50 && totalScore <= 59:
    console.log(`You scored a total of ${totalScore} and your grade is C`);
    break;
  case totalScore >= 40 && totalScore <= 49:
    console.log(`You scored ${totalScore} and your grade is D`);
    break;
  case totalScore >= 0 && totalScore <= 39:
    console.log(`You scored ${totalScore} and your grade is E`);
    break;
  default:
    console.log("Score is with-held")
    break;
}
