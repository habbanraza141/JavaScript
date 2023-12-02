// function cars() {
//     cars = ['mercedes', 'ferrari', 'bmw', 'gmc yukon']
//     for (let i = 0; i < cars.length; i++) {
//         console.log(cars[i])
//     }
// }
// cars()





// function date() {
//     return console.log(Date());
// }

// date()




// function greetUser() {
//     let firstName = prompt('Enter the first name ')
//     let lastName = prompt('Enter the last name')
//     fullName = firstName + lastName
//     return alert('Hello ' + fullName)
// }
// greetUser()






// function sumOf() {
//     let num1 = +prompt('Enter the first number you want to add')
//     let num2 = +prompt('Enter the second number you want to add')
//     sum = num1 + num2
//     return sum
// }

// console.log(sumOf());







// function squareNum(num) {
//     let result = num * num
//     return result
// }

// console.log(squareNum(9));






// function factorial(num) {
//     let sum = 1
//     for (let index = num; index > 0; index--) {
//         sum *= index
//     }
//     return sum
// }
// console.log(factorial(8));




// function counting(x, n) {
//     for (let index = x; index <= n; index++) {
//         console.log(index);
//     }
//     return
// }
// console.log(counting(1, 10));





// function calculateHypotunese(base, perpendicular) {
//     let hypotenuse = base * base + perpendicular * perpendicular
//     let result = Math.sqrt(hypotenuse)
//     return result
// }
// console.log(calculateHypotunese(2, 3));





// function area(width, height) {
//     let A = width * height
//     return A
// }
// console.log(area(9, 8));





// function sortArray(array1) {
//     let newArray = array1.sort()
//     return newArray
// }
// console.log(sortArray([8, 6, 5, 1]));







// function sumArray(array1) {
//     let sum = 0;
//     for (let index = 0; index < array1.length; index++) {
//         sum = sum + array1[index]

//     }
//     return sum
// }
// console.log(sumArray([5, 9, 1, 6]));






// function calPower(num, power) {
//     let result = Math.pow(num, power)
//     return result
// }
// console.log(calPower(2, 5));







// function randomNumber() {
//     let a = Math.ceil(Math.random() * 6)
//     return a
// }
// console.log(randomNumber());





// function reverseNumber(num) {
//     let initialNumber = num + ''
//     let reverseNum = initialNumber.split('').reverse().join('')
//     return reverseNum
// }
// console.log(reverseNumber(9796));







// function isPalindrome(word) {
//     let reverseWord = word.split('').reverse().join('')
//     if (reverseWord === word) {
//         console.log('The word is palindrome');
//     } else {
//         console.log('The word is not palindrome');
//     }
// }

// console.log(isPalindrome('habban'));








// function toSentenceCase(str) {
//     let array1 = str.split(' ')
//     let newArray = []
//     for (let index = 0; index < array1.length; index++) {
//         newArray.push(array1[index].charAt(0).toUpperCase() + array1[index].slice(1));
//     }
//     return newArray.join(' ')
// }
// console.log(toSentenceCase('the quick brown fox'));





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







// function calcCircumference(radius) {
//     let circumference = 2 * 3.141 * radius
//     return circumference
// }
// console.log('The circumference is ' + calcCircumference(10) + ' centimeters');

// function calcArea(radius) {
//     let area = 3.141 * radius * radius
//     return area
// }
// console.log('The area is ' + calcArea(10) + ' centimeters square');







// function farhenheitToCelcius(f) {
//     let c = (32 * f - 32) * 5 / 9
//     return c
// }

// console.log(farhenheitToCelcius(10));

// function celciusToFarhenheit(c) {
//     let f = (c * 9 / 5) + 32

//     return f
// }

// console.log(celciusToFarhenheit(1));