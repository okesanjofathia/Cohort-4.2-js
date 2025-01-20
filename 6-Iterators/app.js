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
 *
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
let filterAdmin = users.filter((user) => (
  user.isAdmin === true
));

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
