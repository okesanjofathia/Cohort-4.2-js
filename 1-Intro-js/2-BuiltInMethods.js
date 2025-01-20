/**
 * BuiltIn Methods in JS
 * Methods that are not user defined. Meaning methods that are part of the js system.
 */
/**
 * console.log(): Display js expression in the console.
 */
console.log("Display my code");
/**
 * .length : Returns the length of a String object.
 */
// Illustration
console.log("kehinde".length); // 7
console.log("Abdulrahman".length); // 11
console.log("Alimi".length); // 5
// classwork
 console.log("Okesanjo".length);
 console.log("Fathia".length);
/**
 * .toUpperCase()
 * Converts all the alphabetic characters in a string to uppercase.
 */
console.log("kehinde".toUpperCase());
console.log("Abdulrahman".toUpperCase()); 
// classwork
console.log("opeyemi".toUpperCase());
/**
 * .toLowerCase()
 * Converts all the alphabetic characters in a string to lowercase.
 */
console.log("THIS IS MY SECOND WEEK OF LEARNIING JAVASCRIPT".toLowerCase());
// classswork
console.log(
  "All charactersto lowercase =>",
  "I AM SUPER EXCITED TO START LEARNING JS".toLowerCase()
);
/**
 * .includes()
 */
console.log("check whether it contain a substring =>", "alimi".includes("i")); // true
console.log("check whether it contain a substring =>", "alimi".includes("o")); // false
// classwork
console.log("grandma".includes("g"));
console.log("fathia".includes("o"));
/**
 * index of a string characters
 */
// string[index]
console.log("first character", "marusoft"[0]); // m
console.log("second character", "marusoft"[1]); // a
console.log("third character", "marusoft"[2]); // r
console.log("fourth character", "marusoft"[3]); // u
console.log("fifth character", "marusoft"[4]); // s
console.log("sixth character", "marusoft"[5]); // o
console.log("seventh character", "marusoft"[6]); // f
console.log("eighth character", "marusoft"[7]); // t
// classwork
console.log("first character", "fathia"[0]);
console.log("second character", "fathia"[1]);
console.log("third character", "fathia"[2]);
console.log("fourth character", "fathia"[3]);
console.log("fifth character", "fathia"[4]);
console.log("sixth character", "fathia"[5]);
/**
 * charAt(index): Returns the character at the specified index.
 */
console.log(
  "Returns the character at the specified index ==>",
  "kehinde".charAt(0)
); // k
console.log(
  "Returns the character at the specified index ==>",
  "kehinde".charAt(4)
); // n
/**
 * slice(start, end): Extracts part of a string and returns it.
 */
console.log(
  "Extracts part of a string and returns it",
  "abdulrahman".slice(0, 3)
); // abd
console.log(
  "Extracts part of a string and returns it",
  "abdulrahman".slice(0, 4)
); // abdu
console.log(
  "Extracts part of a string and returns it",
  "abdulrahman".slice(0, 5)
); // abdu
console.log("Classwork ==>", "fathia".slice(0, 3));
/**
 * split(separator): Splits a string into an array of substrings.
 */
console.log(
  "Splits a string into an array of substrings",
  "marusoft".split("")
);
// classwork
console.log("fathia".split(""));

/**
 * Math methods
 * Math.random(), Math.floor(), Math.ceil(), Math.rand(), Math.PI
 */
// Math.random(): Returns a pseudorandom number between 0 and 1.
console.log("Math random result btw 0 and 1 ==>", Math.random());
// Math.random(): Returns a pseudorandom number between 0 and 2.
console.log("Math random result btw 0 and 2 ==>", Math.random() * 2);
// Math.random(): Returns a pseudorandom number between 0 and 10.
console.log("Math random result btw 0 and 10 ==>", Math.random() * 10);
console.log(
  "Math random result random numbers from 1 to 10 ==>",
  Math.random() * 10 + 1
);
console.log(
  "Math random result random numbers from 1 to 100 ==>",
  Math.random() * 100 + 1
);
// classwork
console.log("Math random result btw 0 and 1 ==>", Math.random());
console.log("Math random result btw 0 and 5 ==>", Math.random() * 5);
console.log("Math random result from 1 to 10 ==>", Math.random() * 10 + 1);
/**
 * (method) Math.floor(x: number): number
 * Returns the greatest integer less than or equal to its numeric argument.
 * @param x — A numeric expression.
 * Math.floor()
 */
console.log("Math.floor Result one", Math.floor(0.6749)); // 0
console.log("Math.floor Result two", Math.floor(3.523)); // 3
console.log("RESULT OF RANDOM==>", Math.random() * 3 + 1);
console.log("CONVERTED==>", Math.floor(Math.random() * 3 + 1));
// classwork
console.log("Classwork ==>", Math.floor(Math.random() * 10 + 90));
/**
 * Math.PI
 * (property) Math.PI: number
 * Pi. This is the ratio of the circumference of a circle to its diameter.
 *
 * */
console.log("Math.PI=>", Math.PI); // 3.141592653589793

/**
 * Math.ceil()
 * (method) Math.ceil(x: number): number
 * Returns the smallest integer greater than or equal to its numeric argument.
 * @param x — A numeric expressio
 */

console.log(Math.ceil(4.798));

/**
 * Math.round()
 * Returns a supplied numeric expression rounded to the nearest integer.
 * @param x — The value to be rounded to the nearest integer
 */

console.log(Math.round(3.7378));
console.log(Math.round(8.7378));
console.log(Math.round(6.123));

// Math.sqrt() and Math.sqrt()

// Returns the square root of a number
console.log("Sqare Root of numbers", Math.sqrt(4)); // ==> 2
console.log("Sqare Root of numbers", Math.sqrt(16)); // ==> 4

// Math.pow()
/**
 * Returns the value of a base expression taken to a specified power.
 * @param x — The base value of the expression.
 * @param y — The exponent value of the expression.
 * Math.pow(x, y)
 */
console.log("2 raise to 4==>", Math.pow(2, 4));
console.log("2 raise to 16==>", Math.pow(2, 16));
console.log("3 raise to 9==>", Math.pow(3, 9));
/**
 * Date Methods
 * New Date
 */
console.log("new Date ==>", new Date());
console.log("Get the local date, and time ==>", new Date().toLocaleString());

console.log("The current day of the week==>", new Date().getDay());
console.log("Get the current month==>", new Date().getMonth());
console.log("Get the current year==>", new Date().getFullYear());
console.log("Get the current date==>", new Date().getDate());
console.log("Get the hour==>", new Date().getHours().toLocaleString());
console.log("Get the minute==>", new Date().getMinutes().toLocaleString());
console.log("getSeconds==>", new Date().getSeconds().toLocaleString());
console.log(
  "Get the hour with text expression==>",
  `${new Date().getHours().toLocaleString()} hrs ago`
);
console.log("Get the current time ==>", new Date().toLocaleTimeString());
console.log(
  "Returns a date as a string value in ISO format ==>",
  new Date().toISOString()
);