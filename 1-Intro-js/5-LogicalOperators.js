/**
 * Logical Operators
 * AND Operator (&&)
 * OR Operator (||)
 * Not Operator (!)
 */

// AND Operator &&
// When && operator is placed between two JS expressions, the result
// will return a truthy value if the both expression are true otherwise falsy value is returned

let isSunny = true;
let isCoding = true;
let isCloudy = false;

let check = isCoding && isCoding;
console.log("check =", check);

let confirmExpression = isSunny && isCloudy;
console.log("Confirm Expression =", confirmExpression )

// OR Operator ||
// When || operator is placed between two JS expressions, the result
// will return a truthy value if either of the expression is true otherwise falsy value is returned

let isRainy = false;
let isUmbrellaAvailable = true;

let verify = isRainy || isUmbrellaAvailable;
console.log("verify =", verify);

// Not Operator !
// The Not operator ! is used to reverse a result. That is, a positive to negative, or negative to positive.

let changeValue = !isRainy;
console.log("changeValue =", changeValue);

// Classwork(
console.log("====CLASSWORK (AND)====",)
let isStudent = true;
let isGraduate = false;
let isAdmitted = true;

let trueResult = isStudent && isAdmitted;
console.log("TrueResult =", trueResult)

let falseResult = isGraduate && isAdmitted;
console.log("FalseResult =", falseResult)

console.log("=== OR OPERATORS ===")
let isUsers = false;
let isLoggedin = true;
let isTeacher = false;

let truthyValue = isLoggedin || isUsers;
console.log("TruthyValue =", truthyValue)

let falsyValue = isUsers || isTeacher;
console.log("FalsyValue =", falsyValue)

console.log("=> NOT OPERATORS <=")
let notAdmitted = !isAdmitted;
console.log("Not Admitted =", notAdmitted )