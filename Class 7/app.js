// for (i = 1; i < 11; i++) {
//     console.log(i)
// }


function showValue() {
    let userValue = document.querySelector("#userInput").value
    const p = document.querySelector("#demo")
    p.innerHTML = " "
    for (i = 1; i <= 10; i++) {
        console.log(userValue + " X " + i + " = " + userValue * i);
        p.innerHTML = p.innerHTML + userValue + " X " + i + " = " + userValue * i + "<br />";
    }

}



// const input = document.querySelector('#value')
// function showValue() {
//     console.log(typeof (input.value));
// }
