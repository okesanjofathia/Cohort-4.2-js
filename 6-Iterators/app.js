/**
 * Iterators
 * In computer programming, an iterator is an object that progressively provides access to each item of a collection, in order.
 */
/**
 * ITERATORS
 * .forEach()
 * .map()
 * .filter()
 * .reduce()
 * .find()
 * .every()
 * .some()
 */

/**
 * .forEach()
 * A function that accepts up to three arguments.
 * forEach calls the callbackfn function one time
 * for each element in the array.
 * Performs the specified action for each element in an array.
 */

const myFavoritePlaces = [
  "Remo",
  "Ogbomosho",
  "Idiabebe",
  "Shomolu",
  "Mafoluku",
];
// for (let i = 0; i < myFavoritePlaces; i++) {
//   console.log(`${myFavoritePlaces[i]} is my favorite place to stay.`);
// }
myFavoritePlaces.forEach((place) => {
  console.log(`${place} is my favorite place to stay.`);
});

// CLASSwork
const myFavoriteStates = ["Lagos", "Ogun", "Oyo", "Osun", "Kano", "Nasarawa"];
myFavoriteStates.forEach((state) => {
  console.log(`I would love to visit ${state} state.`);
});

/**
 * .map()
 *Calls a defined callback function on each element of an array,
 * and returns an array that contains the results.
 * @param callbackfn — A function that accepts up to three arguments.
 * The map method calls the callbackfn function one time for each element in the array.
 */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let doubleNumber = numbers.map((number) => {
  return number * 2;
});
console.log("doubleNumber", doubleNumber);

// Example 2 on .map()
let exclamationWords = [
  "Wow",
  "Amazing",
  "Awesome",
  "Terrific",
  "Unbelievable",
  "Dumbfounded",
];
let addExclamationSymbol = exclamationWords.map((word) =>
  console.log(`${word}!`)
);

// classWORK
let oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let tripleOddNumbers = oddNumbers.map((oddnumber) =>
  console.log("TripleOddNumbers", oddnumber * 3)
);

/**
 * .filter()
 * Returns the elements of an array that meet the
 * condition specified in a callback function.
 */
let users = [
  {
    id: 1,
    name: "Sogbogban",
    isAdmin: true,
  },
  {
    id: 2,
    name: "Olusesi",
    isAdmin: false,
  },
  {
    id: 3,
    name: "Okoya",
    isAdmin: true,
  },
  {
    id: 4,
    name: "Silvester",
    isAdmin: false,
  },
];
let filterAdmin = users.filter((user) => user.isAdmin === true);

// Classwork
let studentData = [
  {
    id: 1,
    name: "David",
    gender: "male",
  },
  {
    id: 2,
    name: "Mubarak",
    gender: "male",
  },
  {
    id: 3,
    name: "Aliyah",
    gender: "female",
  },
  {
    id: 4,
    name: "Nelson",
    gender: "male",
  },
  {
    id: 5,
    name: "Fathia",
    gender: "female",
  },
];
let filterMale = studentData.filter((m) => {
  return m.gender === "male";
});
console.log(filterMale);
let filterFemale = studentData.filter((f) => {
  return f.gender === "female";
});
console.log(filterFemale);

// Morning Tea
const students = [
  {
    id: 1,
    name: "David",
    age: 23,
  },
  {
    id: 2,
    name: "Mubarak",
    age: 21,
  },
  {
    id: 3,
    name: "Aliyah",
    age: 20,
  },
  {
    id: 4,
    name: "Nelson",
    age: 22,
  },
  {
    id: 5,
    name: "Fathia",
    age: 19,
  },
];
let filterAgeGreater = students.filter((student) => {
  return student.age > 20;
});
console.log("Age greater than 20==>",filterAgeGreater);
let filterAgeLess = students.filter((student) => {
  return student.age < 20;
});
console.log("Age less than 20==>",filterAgeLess);
let filterAgeEqual = students.filter((student) => {
  return student.age === 20;
});
console.log("Age equal to 20==>",filterAgeEqual);
let filterAgeEqualOrGreater = students.filter((student) => {
  return student.age >= 20;
});
console.log("Age greater than or equal to 20==>",filterAgeEqualOrGreater);
let filterAgeEqualOrLess = students.filter((student) => {
  return student.age <= 20;
});
console.log("Age less than or equal to 20==>",filterAgeEqualOrLess);
let filterName = students.filter((student) => {
  return student.name.length > 5;
});
console.log("Name length greater than 5==>",filterName);

// Classwork
const record = [
  {
    id: 1,
    fullname: "Owolabi Kehinde",
    department: "Phlebotomy",
    age: 35,
    address:"10, Adeyete str"
  },
  {
    id: 2,
    fullname: "Taiye Taiwo",
    department: "Chemistry",
    age: 25,
    address:"10, Adeyemi str"
  },
  {
    id: 3,
    fullname: "Nuno Gomes",
    department: "Anatomy",
    age: 55,
    address:"19, Brown Avenue"
  },
  {
    id: 4,
    fullname: "Nelson kelvin",
    department: "Physiology",
    age: 55,
    address:"10, Kelvin str"
  },
  {
    id: 5,
    fullname: "James Obi",
    department: "Phlebotomy",
    age: 60,
    Address:"2, Kelvin str"
  },
];
let filterDepartmentandAge = record.filter((record) => {
  return record.department === "Phlebotomy" && record.age > 20;
});
console.log("Phlebotomy Department==>",filterDepartmentandAge); 

/**
 * .reduce()
 * Calls the specified callback function for all the elements in an array.
 * The return value of the callback function is the accumulated result,
 * and is provided as an argument in the next call to the callback function.
 */
const frequentNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let getSingleValue = frequentNumbers.reduce((acc, curr) => {
  return acc + curr;
},0);
console.log("getSingleValue",getSingleValue);

// cLaSsWoRk
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 56];
let getSingleArray = numbersArray.reduce((acc, curr) => {
  return acc + curr;
},0);
console.log("getSingleArray",getSingleArray);

// ClAsSwOrK
let myName = ["F", "a", "t", "h", "i", "a"];
let joinName = myName.reduce((acc, curr) => {
  return acc + curr;
}, "");
console.log("joinName",`${joinName} O.`);

/**
 * .find()
 * 
 */
let myCars = [
  {
    id: 1,
    name: "Toyota",
    color: "Blue",
  },
  {
    id: 2,
    name: "Benz",
    color: "Black",
  },
  {
    id: 3,
    name: "Ford",
    color: "Red",
  },
  {
    id: 4,
    name: "Honda",
    color: "Yellow",
  },
];
let findCar = myCars.find((car) => car.name === "Toyota");
console.log("findCar",findCar);
let findCarLength = myCars.find((car) => car.name.length > 4);
console.log("findCarLength",findCarLength);

/**
 * .every()
 * The every() method tests whether all elements in the array pass 
 * the test implemented by the provided function.
 * It returns a Boolean value.
 * Determines whether all the members of an array satisfy the specified test.
 */
const randomNum = [10, 20, 30, 40, 50, 60, 70];
let checkValue = randomNum.every((num) => num > 30);
console.log("checkValue",checkValue);

const evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16];
const checkEvenNumbersvalue = evenNumbers.every((even) => even < 0);
console.log("checkEvenNumbersvalue",checkEvenNumbersvalue);

/**
 * .some()
 * The some() method tests whether at least one element in the array passes
 *  the test implemented by the provided function. It returns true if, in the array, 
 * it finds an element for which the provided function returns true; 
 * otherwise it returns false. It doesn't modify the array.
 */
const myFavsportsName = ["Football", "Basketball", "Tennis", "Volleyball", "Cricket"];
let checkItemLength = myfavSports.some((sport) => sport.length < 4);
console.log("checkItemLength",checkItemLength);