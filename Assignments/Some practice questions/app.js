// let array2 = [5, 6, 7, 8, 9, 10]
// array2.push(prompt("Enter the first number"))
// array2.push(prompt("Enter the second number"))
// array2.push(prompt("Enter the third number"))
// array2.push(prompt("Enter the four number"))
// array2.push(prompt("Enter the five number"))
// console.log(array2);

// function printValues() {
//     let sum = 1;
//     for (let i = 1; i < array2.length; i++) {
//         // console.log(array2[i]);
//         sum = sum * array2[i]
//     }
//     return sum
// }
// console.log(printValues());


// function getPositives(ar) {
//     let ar2 = [];

//     for (let i = 0; i < ar.length; i++) {
//         let el = ar[i];

//         if (el >= 0) {
//             ar2.push(el);
//         }
//     }

//     return ar2;
// }

// let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// let ar2 = getPositives(ar);

// console.log(ar2);



const a = [true, 2];
const b = [3, "ajdxnajdn"];
// expected result: [{id: 1}, {id: 2}, {id: 3}, {id: 4}]
const result = a.concat(b);
console.log(result);