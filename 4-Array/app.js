/**
 * Array
 * Array = collection of list of items.
 * denoted with square brackets [].
 */
// Array with same data
/**
 * How to create an Array
 */
let cohort4Students = [
  "David",
  "Aliyah",
  "Nelson",
  "Fathia",
  "Mubarak",
  "Mustapha",
  "AbdulQudus",
];
console.log(cohort4Students);

/**
 * How to access item in an array
 * array[indexNumber]
 */
console.log(cohort4Students[0]); // David
console.log(cohort4Students[1]); // Aliyah
console.log(cohort4Students[2]); // Nelson
console.log(cohort4Students[3]); // Fathia

/**
 * ClassworK
 */
let myFavouriteplaces = ["Dubai", "Qatar", "Paris", "Sudan", "Canada"];
console.log(myFavouriteplaces);
console.log(myFavouriteplaces[0]); // Dubai
console.log(myFavouriteplaces[1]); // Qatar
console.log(myFavouriteplaces[2]); // Paris
console.log(myFavouriteplaces[3]); // Sudan
console.log(myFavouriteplaces[4]); // Canada

/**
 * How to modify/update an item inside an array
 * myArray[index to modify] = new value
 */
cohort4Students[0] = "Ikechukwu";
console.log("nameChange ==>", cohort4Students);

// ClasswoRK
myFavouriteplaces[4] = "Texas";
console.log("placeChange ==>", myFavouriteplaces);

// ========= Array methods =============

/**
 * .length
 * Gets or sets the length of the array
 * This is a number one higher than the highest index in the array.
 */
let topFourteamEPL = ["Liverpool", "Arsenal", "Nottingham Forest", "Chelsea"];
let getTeams = topFourteamEPL.length;
console.log("getTeams ==>", getTeams); //

// Classwork
let getMyfavouritePlaces = myFavouriteplaces.length;
console.log("GetmyFavouriteplace", getMyfavouritePlaces);

/**
 * .push() add new item into an array
 * Appends new elements to the end of an array
 * and returns the new length of the array
 * @param items - New elements to add to the array
 */
let addNewteam = topFourteamEPL.push("Manchester City");
console.log("topFourteamEPL", topFourteamEPL);
let addNewfavouritePlace = myFavouriteplaces.push("Canada");
console.log("myFavouriteplaces", myFavouriteplaces);

/**
 * .pop() remove an item in an array
 * Removes the last element from an array
 * and returns  it.
 */
let removeLastteam = topFourteamEPL.pop();
console.log("topFourteamEPL", topFourteamEPL);

/**
 * .shift()
 * Removes the first element from an array and returns it.
 * If the array is empty, undefined is returned and the array is not modified */
let removeFirstteam = topFourteamEPL.shift();
console.log("topFourteamEPL", topFourteamEPL);

/**
 * Classwork
 */
let favouriteLocalstadia = [
  "Teslim Balogun Stadium",
  "Obafemi Awolowo Stadium",
  "Eyinmba International Stadium",
  "Moshood Abiola National Stadium",
];
console.log("favouriteLocalstadia ==>", favouriteLocalstadia);
console.log(favouriteLocalstadia[0]);
console.log(favouriteLocalstadia[1]);
console.log(favouriteLocalstadia[2]);
console.log(favouriteLocalstadia[3]);
// .length
let getStadia = favouriteLocalstadia.length;
console.log("getStadia==>", getStadia);
// .push
let addNewstadium = favouriteLocalstadia.push("Lagos National Stadium");
console.log("favouriteLocalstadia ==>", favouriteLocalstadia);
// .pop
let removeLaststadium = favouriteLocalstadia.pop();
console.log("favouriteLocalstadia ==>", favouriteLocalstadia);
// .shift
let removeFirststadium = favouriteLocalstadia.shift();
console.log("favouriteLocalstadia", favouriteLocalstadia);

let favouriteLocalfood = [
  "Ofada Rice",
  "Spaghetti",
  "Jollof Rice",
  "Plantain and egg",
];
console.log("favouriteLocalfood==>", favouriteLocalfood);
console.log(favouriteLocalfood[0]);
console.log(favouriteLocalfood[1]);
console.log(favouriteLocalfood[2]);
console.log(favouriteLocalfood[3]);
// .length
let getFood = favouriteLocalfood.length;
console.log("getFood", getFood);
// .push
let addNewfood = favouriteLocalfood.push("Amala and Ewedu with Gbegiri");
console.log("favouriteLocalfood ==>", favouriteLocalfood);
// .pop
let removeLastfood = favouriteLocalfood.pop();
console.log("favouriteLocalfood ==>", favouriteLocalfood);
// .shift
let removeFirstfood = favouriteLocalfood.shift();
console.log("favouriteLocalfood ==>", favouriteLocalstadia);

/**
 * .unshift()
 * Inserts new elements at the start of an array,
 * and returns the new length of the array.
 * @param items — Elements to insert at the start of the array.
 */
let addFirstteam = topFourteamEPL.unshift("Liverpool");
console.log("addFirstteam", addFirstteam);
console.log("topFourteamEPL", topFourteamEPL);

/**
 * .slice()
 * Returns a copy of a section of an array.
 * For both start and end, a negative index can be used to indicate 
 * an offset from the end of the array.
 * For example, -2 refers to the second to last
 * element of the array.
 * slice(@param start, @param end)
 */
let favouritePlace = ["Lagos", "Iju", "Osun", "Mosaku", "Abuja", "Abeokuta"]
let favouritePlacecopy = favouritePlace.slice(2, 4);
console.log("favouritePlacecopy", favouritePlacecopy);

// CLASSWORK
let myFavouriteplacesCopy = myFavouriteplaces.slice(1,3);
console.log("myFavouriteplacesCopy", myFavouriteplacesCopy);

/**
 * .split()
 * Split a string into substrings using
 * the specified separator nd return them as an array.
 * @param separator — A string that identifies character
 * or characters to use in separating the string.
 * If omitted, a single-element array containing the entire string is returned.
 * @param limit — A value used to limit the number of elements
 * returned in the array.
 */
let splitString = "Hello world".split();
console.log('splitString',splitString)

/**
 * .join()
 * Adds all the elements of an array to a string,
 * separated by the specified separator string.
 * @param separator — A string used to separate one element
 * of the array from the next in the resulting string.
 * If omitted, the array elements are separated with a comma.
 */
let joinString1 = splitString.join(" ");
let joinString2 = splitString.join();
console.log('joinString1', joinString1)
console.log('joinString2', joinString2)

/**
 * .reverse()
 * Reverses the elements in an array in place.
 * This method mutates the array and returns 
 * a reference to the same array.
 */
let schoolName = ["M", "a", "r", "u", "s", "o", "f", "t"];
let reversedResult = schoolName.reverse();
console.log("reversedResult", reversedResult);

/**
 * .includes()
 * Determines whether an array includes a certain element,
 * returning true or false as appropriate.
 * @param searchElement — The element to search for.
 * @param fromIndex — The position in this array at which 
 * to begin searching for searchElement.
 */
let gadget = ["laptop", "phone", "television", "airpod", "Ipad"];
let checkIflaptopExist = gadget.includes("laptop", 0);
let checkIfSmartWatch = gadget.includes("Smart Watch", 0);
console.log("checkIflaptopExist",checkIflaptopExist); // true
console.log("checkIfSmartWatch", checkIfSmartWatch); // false

/**
 * .splice()
 * Removes elements from an array and, 
 * if necessary, inserts new elements in their 
 * place, returning the deleted elements.
 * @param start — The zero-based location in 
 * the array from which to start removing elements.
 * @param deleteCount — The number of elements to remove.
 * @returns — An array containing the elements 
 * that were deleted.
 */
let removeSomegadget = gadget.splice(0, 4);
console.log("removeSomegadget", removeSomegadget);

/**
 * .sort()
 * Sorts an array in place. This method mutates the array
 * and returns a reference to the same array.
 * @param compareFn Function used to determine the order of the elements.
 * It is expected to return a negative value if first argument 
 * is less than the second argument, zero if they're equal 
 * and a positive value otherwise. If omitted, the elements 
 * are sorted in ascending, ASCII character order. 
 */
let favEvenNums = [ 4, 8, 10, 12, 2,];
let favOddNums = [9, 3, 1, 5, 7, 11];
let sortedEvenNums = favEvenNums.sort((a, b) => a - b);
let sortedOddNums = favOddNums.sort((a, b) => b - a);
console.log("sortedEvenNums",sortedEvenNums);
console.log("sortedOddNums", sortedOddNums);

/**
 * Classwork
 * 
 */
let flowerName =  "Sunflower";
let splitFlower = flowerName.split("");
console.log("splitFlower==>",splitFlower);
// join
let joinFlower = splitFlower.join("");
console.log("joinFlower==>",joinFlower);
let favouriteFlowernames = ["Rose", "Lily", "Tulip", "Sunflower"];
let reverseFlower = favouriteFlowernames.reverse();
console.log("reverseFlower==>",reverseFlower);
let checkFlower = favouriteFlowernames.includes("Rose", 0);
console.log("includesFlower==>",checkFlower);
let removeFlower = favouriteFlowernames.splice(0, 3);
console.log("removeFlower==>",removeFlower);
let sortFlower = favouriteFlowernames.sort();
console.log("sortFlower==>",sortFlower);

/**
 * Nested Array
 * an array that contains another array
 * is known as a nested array.
 */
/**
 * Items/Elements can be accessed in a nested array using bracket notation
 * specifying the index value. For example to access the various items
 * in the nested array "favouriteDoubleNumber", we can achieve that as follows
 */
/**
 * Classwork
 */
const favouriteDoubleNumber = [
  [1,0],
  [1,2],
  [2,3],
  [3,4],
]
let getSecondelementOfindex1Array = favouriteDoubleNumber[1][1];
console.log(getSecondelementOfindex1Array);
let getSecondelementOfindex0Array = favouriteDoubleNumber[0][1];
console.log(getSecondelementOfindex0Array);
let getFirstelementOfindex2Array = favouriteDoubleNumber[2][0];
console.log(getFirstelementOfindex2Array);
let getsecondElementOfindex3Array = favouriteDoubleNumber[3][1];
console.log(getsecondElementOfindex3Array);

/**
 * Another example of nested array
 */
let pairFellowIntern = [
  ["David", "Aliyah"],
  ["Nelson", "Fathia"],
  ["Mubarak", "Mustapha"],
  ["AbdulQudus", "Ikechukwu"], 
  ["Labeebah", "Thomas"] 
] ;
let getFavouriteIntern = pairFellowIntern[2][1];
console.log(getFavouriteIntern);
let getFavouriteInternpair = pairFellowIntern[4];
console.log(getFavouriteInternpair);
