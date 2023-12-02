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



// const a = [true, 2];
// const b = [3, "ajdxnajdn"];
// expected result: [{id: 1}, {id: 2}, {id: 3}, {id: 4}]
// const result = a.concat(b);
// console.log(result);



var arr = [
    {
        p_id: '01',
        p_price: '2000',
        p_img: 'https://images.samsung.com/is/image/samsung/assets/pk/2307/pfs/02-04-ft12-B5-flexmode-mo-720x540.jpg?$FB_TYPE_J_F_MO_JPG$'
    },
    {
        p_id: '02',
        p_price: '2000',
        p_img: 'https://images.samsung.com/is/image/samsung/p6pim/pk/feature/164028233/pk-feature--thinsp--532104276?$FB_TYPE_A_MO_JPG$'
    },
    {
        p_id: '03',
        p_price: '2000',
        p_img: 'https://images.samsung.com/is/image/samsung/p6pim/pk/sm-a042flbdmeb/gallery/pk-galaxy-a04e-sm-a042-sm-a042flbdmeb-537142111?$650_519_PNG$'
    }

]

console.log(arr[0]);