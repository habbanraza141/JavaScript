// const div = document.querySelector(".container")
// for (let i = 0; i < 5; i++) {
//     div.innerHTML += "Hello world" + "<br />";
// }




// const div = document.querySelector(".container")
// for (let i = 1; i < 11; i++) {
//     div.innerHTML += i + "<br />";
// }



// const div = document.querySelector(".container")
// let userInput = +prompt("Enter the number of multiplication table")
// let lengthofTable = +prompt("Enter the length of multiplication table")
// for (let i = 1; i <= lengthofTable; i++) {
//     div.innerHTML += userInput + " x " + i + " = " + i * userInput + "<br />";
// }




// let A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]
// for (let i = 0; i < A.length; i++) {
//     console.log(A[i]); // here i represents index
// }




// let fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]); // here i represents index
// }




// const emptyArray = []
// const newArray = emptyArray.unshift(prompt("Enter the value"))
// console.log(newArray);



// const div = document.querySelector(".container")
// div.innerHTML = "Counting" + "<br />"

// for (let i = 1; i <= 15; i++) {
//     div.innerHTML += i + ",";
// }


// const div = document.querySelector(".container")
// div.innerHTML = "Reverse Counting" + "<br />"

// for (let i = 10; i >= 1; i--) {
//     div.innerHTML += i + ",";
// }


// const div = document.querySelector(".container")
// div.innerHTML = "odd Counting" + "<br />"

// for (let i = 1; i <= 19; i++) {
//     if (i % 2 != 0) {
//         div.innerHTML += i + ",";
//     }
// }


// const div = document.querySelector(".container")
// div.innerHTML = "even Counting" + "<br />"

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         div.innerHTML += i + ",";
//     }
// }



// const div = document.querySelector(".container")
// div.innerHTML = "series Counting" + "<br />"

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         div.innerHTML += i + "k,";
//     }
// }



// let userInput = prompt("Enter the value")
// let arrayA = ["cake", "applepie", "cookie", "chips", "patties"]
// if (arrayA === userInput) {
//     alert("the entered value is in the array")
// } else {

// }




// let arrayA = [24, 53, 78, 91, 12]
// let newArray = arrayA.sort()
// console.log("the largest number if this array is " + newArray.splice(4, 1));





// let arrayA = [24, 53, 78, 91, 12]
// let newArray = arrayA.sort()
// console.log("the smallest number if this array is " + newArray.splice(0, 1));




// let arrayA = [24, 53, 78, 91, 12]
// let newArray = arrayA.sort()
// console.log("the smallest number if this array is " + newArray.splice(0, 1));
// console.log("the largest number if this array is " + newArray.splice(3, 1));



// const div = document.querySelector(".container")
// div.innerHTML = "multiples of 5" + "<br />"

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 == 0) {
//         div.innerHTML += i + ",";
//     }
// }



// for (let i = 1; i < 2; i++) {
//     console.log(i)
//     for (let j = 2; j < 10; j++) {
//         console.log(j);
//     }
// }

const div = document.querySelector(".container")
for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        div.innerHTML += i + " is even <br/>";

    } else {
        div.innerHTML += i + " is odd <br/>";

    }

}




















// for (i = 1; i < 11; i++) {
//     console.log(i)
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
