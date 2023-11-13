

const img = document.querySelector('img')
const para = document.querySelector('p')
function toss(clicked) {
    let roundNumber = Math.floor(Math.random() * 6);
    console.log(roundNumber);
    if (clicked === 'one' && roundNumber === 0) {
        console.log(clicked, 'toss jeet gaye');
        para.innerHTML = 'toss jeet gaye'
    } else if (clicked === 'two' && roundNumber === 1) {
        console.log('toss jeet gaye');
        para.innerHTML = 'toss jeet gaye'
    } else if (clicked === 'three' && roundNumber === 2) {
        console.log('toss jeet gaye');
        para.innerHTML = 'toss jeet gaye'
    } else if (clicked === 'four' && roundNumber === 3) {
        console.log('toss jeet gaye');
        para.innerHTML = 'toss jeet gaye'
    } else if (clicked === 'five' && roundNumber === 4) {
        console.log('toss jeet gaye');
        para.innerHTML = 'toss jeet gaya'
    } else if (clicked === 'six' && roundNumber === 5) {
        console.log('toss jeet gaya');
        para.innerHTML = 'toss jeet gaya'
    } else {
        console.log('toss haar gaye');
        para.innerHTML = 'Program warr gaya'
    }



    if (roundNumber === 0) {
        img.src = './assets/one.png'
    } else if (roundNumber === 1) {
        img.src = './assets/two.png'
    } else if (roundNumber === 2) {
        img.src = './assets/three.png'
    } else if (roundNumber === 3) {
        img.src = './assets/four.png'
    } else if (roundNumber === 4) {
        img.src = './assets/five.png'
    } else if (roundNumber === 5) {
        img.src = './assets/six.png'
    } else {
    }
}




















































