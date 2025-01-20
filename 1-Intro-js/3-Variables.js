console.log("======= VARIABLE =======");
// A variable is or are container(s) for storing values(data)
// Ways of declaring variable
// let and const keywords are used for declaring variables
// Ways of naming variables in JS
// camelcasing
// pascalcasing
// illustration

// let variableName = value;
// let VariableName = value;
let myName = "Fathia";
let MyName = "Okesanjo";
// Things not allowed for naming variables
// Variable name cannot start with numbers, special characters like @, #, $, -, !
// let 2myName = ""
// let %$@2myName = ""
// More Illustrations

let myAge = 17;
console.log(myAge);

// UPDATE
// variableName = newValue
myAge = 23;
console.log(myAge);

// classwork
let nameOfmySchool = "Ansar-Ud-Deen College"
console.log("The name of my school is", nameOfmySchool)
// const keyword

const PI = Math.PI;
console.log(PI);
// PI = 2.3455;
// console.log(PI); // TypeError: Assignment to constant variable.
// A variable declared with the let keyword can be re-assigned a new value whereas a variable declare with the const keyword cannot be re-assigned a value.
// classwork
const radiusOftheEarth = "6400km"
console.log("The radius of the earth is",radiusOftheEarth)
// radiusOftheEarth = "2400"

 // Concatenation/string manipulation
// Concatenation is a process of joining more than one strings together.
// + operator or using new way
// `` backtick, $ dollar sign and curly braces {}

// iilustartion 
// classwork
let firstName = "Okesanjo";
let lastName = "Fatimah";
let fullName = firstName + " " + lastName;
console.log("FullName ==>", fullName); 

//  New way in es6(es2015)
let myFirstName = "Okesanjo";
let myMiddleName = "Opeyemi";
let myLastName = "Fathia";
const myFullName = `${myFirstName}, ${myMiddleName[0]} ${myLastName}`;
console.log("myFullName ==>", myFullName);

/**
 *  Arithmetics Operators
 * Addition operator (+)
 * Subtraction operator (-)
 * Divsion operator (/)
 * Multiplication operator (*)
 * Modulus operator (%)
 * +, -, / , * , %
 */

// Addition
let x = 5;
let y = 15;
const z = x + y;
console.log(z);


