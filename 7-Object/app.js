console.log("=========ObJeCt==========");
//  ====ObJeCt====

/**
 * Object
 * Object store collections of key-value pairs known as property
 * composed of comma-separated key-value pairs
 * surrounded by curly braces {}.
 * objects are containers storing related data and functionality
 * "course level" has quotation marks because it contains a space character
 */

let myProfile = {
  firstname: "David",
  lastname: "Ogbonna",
  age: 30,
  "course level" : "Beginner",
  isMarried: false,
  isAdmitted: true,
  hobbies: ["coding", "reading", "travelling"],
  address: {
    street: "No 1, David Street",
    city: "Lagos",
    state: "Lagos",
    country : "Nigeria",
  },
};

/**
 * Accessing Object Properties
 * You can access object properties using dot notation or bracket notation.
 */
// Using dot notation
// objectName.propertyName
// illustration
const getLastName = myProfile.lastname;
console.log("getLastName==>",getLastName); // Ogbonna

// classWORK
const getMarriageStatus = myProfile.isMarried;
console.log("getMarriageStatus==>",getMarriageStatus); 

const getAdmissionStatus = myProfile.isAdmitted;
console.log("getAdmissionStatus==>",getAdmissionStatus);

const getHobbies = myProfile.hobbies;
console.log("getHobbies==>",getHobbies);
const getSecondHobbies = myProfile.hobbies[1];
console.log("getSecondHobbies==>",getSecondHobbies);

const getCountry = myProfile.address.country;
console.log("getCountry==>",getCountry); 

// Using bracket notation
// objectName['propertyName']
// illustration
const getAge = myProfile['age'];
console.log("getAge==>",getAge); 

let getCourseLevel = myProfile['course level'];
console.log("getCourseLevel==>",getCourseLevel);

// claSSwoRK
let myGoat = {
  name: "Bobby",
  age: 3,
  food : ["grass", "leaves", "bark"],
  color: "white",
  isMale: true,
  isFemale: false,
  sound : "bleat",
  breed: "Angora",
  location: {
    street: "No 1, David Street",
    city: "Lagos",
    state: "Lagos",
    country : "Nigeria",
  },
};
let getGoatName = myGoat.name;
console.log("getGoatName==>",getGoatName);

let getGoatAge = myGoat.age;
console.log("getGoatAge==>",getGoatAge);

let getGoatFood = myGoat.food;
console.log("getGoatFood==>",getGoatFood);

let getGoatColor = myGoat.color;
console.log("getGoatColor==>",getGoatColor);

let getGoatSound = myGoat.sound;
console.log("getGoatSound==>",getGoatSound);

/**
 * Methods in Object
 */