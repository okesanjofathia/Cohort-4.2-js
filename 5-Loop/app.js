/**
 * Loop
 * for loop
 * do loop
 * while loop
 */
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10); 

/**
 * for loop
 * let i = 0 starting position
 * i < array.length; destination/stopping point of looping
 * i++ iteration step
//  */
// for (let i = 1; i <= 10; i++) {
// }

/**
 * Count 1 - 50 using for loop
 */
console.log(1);
console.log(2); 
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
console.log(11);
console.log(12);
console.log(13);
console.log(14);
console.log(15);
console.log(16);
console.log(17);
console.log(18);
console.log(19);
console.log(20);
console.log(21);
console.log(22);
console.log(23);
console.log(24);
console.log(25);
console.log(26);
console.log(27);
console.log(28);
console.log(29);
console.log(30);
console.log(31);
console.log(32);
console.log(33);
console.log(34);
console.log(35);
console.log(36);
console.log(37);
console.log(38);
console.log(39);
console.log(40);
console.log(41);
console.log(42);
console.log(43);
console.log(44);
console.log(45);
console.log(46);
console.log(47);
console.log(48);
console.log(49);
console.log(50);
for (let i = 1; i <= 50; i++) {
    console.log(i);
}
/**
 * Count 100 - 1  using for loop
 */
for (let i = 100; i >= 1; i--) {
    console.log(i);
}

console.log("========== for loop with array =========")
/**
 * For loop on Array
 */
let favLocalStadia = [ "Teslim Balogun", "Nnamdi Azikwe", "Obafemi Awolowo", "Moshood Abiola", "Confluence"];
for (let s = 0; s < favLocalStadia.length; s++) {
    console.log(s);
    console.log(`${favLocalStadia[s]} is one of my favorite local stadia`);
}

/**
 * Classwork
 */
let localPlacesinNigeria = ["Mushin", "Oshodi", "Agege", "Ajegunle", "Yaba", "Ojuelegba", "Lekki"];
for (let n = 0; n < localPlacesinNigeria.length; n++) {
    console.log(n);
    console.log(`I would love to visit ${localPlacesinNigeria[n]} community`);
}
// CLASSWORK
let myFavFood = ["Amala", "Ewedu", "Gbegiri", "Pounded Yam", "Egusi", "Efo", "Jollof Rice"];
for (let f = 0; f < myFavFood.length; f++) {
    console.log(f);
    console.log(`I love eating ${myFavFood[f]}`);
}

console.log("=========== Multiplication Table ===========");
/**
 * Multiplication Table
 * 2 x 1 = 2
 * 2 x 2 = 4
 * 2 x 3 = 6
 * 2 x 4 = 8
 * 2 x 5 = 10
 */
let firstMultiplier = [1, 2, 3, 4, 5];
let secondMultiplier = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (let f = 0; f < firstMultiplier.length; f++) {
    for (let s = 0; s < secondMultiplier.length; s++) { 
      const answer = firstMultiplier[f] * secondMultiplier[s];
      // console.log(answer)
    console.log(`${firstMultiplier[f]} * ${secondMultiplier[s]} = ${answer}`);
    }
}