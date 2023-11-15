// Write a program to display the message “Hello World” 5 times in your browser using for loop.
// const div = document.querySelector(".container")
// for (let i = 0; i < 5; i++) {
//     div.innerHTML += "Hello world" + "<br />";
// }


// Write a program to print numeric counting from 1 to 10.
// const div = document.querySelector(".container")
// for (let i = 1; i < 11; i++) {
//     div.innerHTML += i + "<br />";
// }


// Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
// const div = document.querySelector(".container")
// let userInput = +prompt("Enter the number of multiplication table")
// let lengthofTable = +prompt("Enter the length of multiplication table")
// for (let i = 1; i <= lengthofTable; i++) {
//     div.innerHTML += userInput + " x " + i + " = " + i * userInput + "<br />";
// }




// Write each element on new line with the help of for loop of this array
// let A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]
// for (let i = 0; i < A.length; i++) {
//     console.log(A[i]); // here i represents index
// }


// Write a program to print items of the following array using for loop:
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]); // here i represents index
// }


// Write a program to initialize an array of N items by using prompt. Where N is number of items as entered by the user.
// const emptyArray = []
// const newArray = emptyArray.unshift(prompt("Enter the value"))
// console.log(newArray);


// Generate the following series in your browser.
// Counting
// const div = document.querySelector(".container")
// div.innerHTML = "Counting" + "<br />"
// for (let i = 1; i <= 15; i++) {
//     div.innerHTML += i + ",";
// }


// Reverse counting
// const div = document.querySelector(".container")
// div.innerHTML = "Reverse Counting" + "<br />"
// for (let i = 10; i >= 1; i--) {
//     div.innerHTML += i + ",";
// }


// Odd counting
// const div = document.querySelector(".container")
// div.innerHTML = "odd Counting" + "<br />"
// for (let i = 1; i <= 19; i++) {
//     if (i % 2 != 0) {
//         div.innerHTML += i + ",";
//     }
// }


// Even counting
// const div = document.querySelector(".container")
// div.innerHTML = "even Counting" + "<br />"
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         div.innerHTML += i + ",";
//     }
// }


// Series counting
// const div = document.querySelector(".container")
// div.innerHTML = "series Counting" + "<br />"
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         div.innerHTML += i + "k,";
//     }
// }


// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// let userInput = prompt("Enter the value")
// let arrayA = ["cake", "applepie", "cookie", "chips", "patties"]
// if (arrayA === userInput) {
//     alert("the entered value is in the array")
// } else {
// }


// Write a program to identify the largest number in the given array
// let arrayA = [24, 53, 78, 91, 12]
// let newArray = arrayA.sort()
// console.log("the largest number if this array is " + newArray.splice(4, 1));


// Write a program to identify the smallest number in the given array.
// let arrayA = [24, 53, 78, 91, 12]
// let newArray = arrayA.sort()
// console.log("the smallest number if this array is " + newArray.splice(0, 1));


// Write a program to identify the largest & the smallest number in the given array
// let arrayA = [24, 53, 78, 91, 12]
// let newArray = arrayA.sort()
// console.log("the smallest number if this array is " + newArray.splice(0, 1));
// console.log("the largest number if this array is " + newArray.splice(3, 1));


// Write a program to print multiples of 5 ranging 1 to 100
// const div = document.querySelector(".container")
// div.innerHTML = "multiples of 5" + "<br />"
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 == 0) {
//         div.innerHTML += i + ",";
//     }
// }



// const tr2 = document.querySelector('.row2')
// const td2 = document.querySelector('.data2')
// for (let index = 0; index < scores.length; index++) {
//     td.innerHTML += `${scores[index]}  <br />`

// }




// const div = document.querySelector(".container")
// for (let i = 0; i < 20; i++) {
//     if (i % 2 == 0) {
//         div.innerHTML += i + " is even <br/>";

//     } else {
//         div.innerHTML += i + " is odd <br/>";

//     }

// }



// let arrayA = [12, 45, 3, 22, 34, 50]
// let userStop = +prompt("Enter the number to stop")
// let newArrayA = arrayA.splice(0, userStop)
// console.log(newArrayA)




// const div = document.querySelector(".container")
// let userInput = +prompt("Enter the number of lines")
// for (let i = 1; i < userInput; i++) {
//     div.innerHTML += "*****" + "<br />";
// }




// function showValue() {
//     let userValue = document.querySelector("#userInput").value
//     const p = document.querySelector("#demo")
//     p.innerHTML = " "
//     for (i = 1; i <= 10; i++) {
//         console.log(userValue + " X " + i + " = " + userValue * i);
//         p.innerHTML = p.innerHTML + userValue + " X " + i + " = " + userValue * i + "<br />";
//     }

// }



// const input = document.querySelector('#value')
// function showValue() {
//     console.log(typeof (input.value));
// }
