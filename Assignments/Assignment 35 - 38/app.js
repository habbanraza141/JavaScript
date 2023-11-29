// function find_longest_word(str) {
//     let array1 = str.match(/\w[a-z]{0,}/gi);
//     let result = array1[0];

//     for (let index = 1; index < array1.length; index++) {
//         if (result.length < array1[index].length) {
//             result = array1[index];
//         }
//     }
//     return result;
// }
// console.log(find_longest_word('Web Development Tutorial'));





// function countVowels(enterStrings) {
//     let count = 0
//     for (let index = 0; index < enterStrings.length; index++) {

//         if (enterStrings[index] == 'a') {
//             count += 1

//         } else if (enterStrings[index] == 'e') {
//             count += 1

//         } else if (enterStrings[index] == 'i') {
//             count += 1

//         } else if (enterStrings[index] == 'o') {
//             count += 1

//         } else if (enterStrings[index] == 'u') {
//             count += 1

//         }
//     }
//     return count
// }

// console.log(countVowels('habban'));



// function findingType(key) {
//     return key
// }
// console.log(typeof (findingType(false)));




// function exctractedOnes(exctractStrings) {
//     let strings = ''
//     for (let index = 0; index < exctractStrings.length; index++) {
//         if (strings.includes(exctractStrings[index]) == false) {
//             strings += exctractStrings[index]
//         }
//     }
//     return strings
// }
// console.log(exctractedOnes('thequickbrownfoxjumpsoverthelazydog'));





// function occurence(string1, letter) {
//     let count = 0
//     for (let index = 0; index < string1.length; index++) {
//         if (string1.charAt(index) == letter) {
//             count += 1
//         }
//     }
//     return count
// }
// console.log(occurence('JSResourceS1com', 'e'));






// function ageCaluculator(currentYear, birthYear) {
//     let age = currentYear - birthYear
//     console.log(`you are either ${age} years or ${age + 1} years old`);
// }

// ageCaluculator(2023, 1998)









// function liftTimeSupplyCalculater(expectedAge, perDay) {
//     let numberOfBusicuits = perDay * expectedAge * 365;
//     console.log(`you will need ${numberOfBusicuits} oreos per day until the ripe old age of ${expectedAge}`);
// }

// liftTimeSupplyCalculater(85, 5)