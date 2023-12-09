const data = localStorage.getItem('phoneDetail')
const phoneDetail = JSON.parse(data);

console.log(phoneDetail);

const div = document.querySelector('.render-phones');

function renderItems(){
    div.innerHTML = ''

    for (let i = 0; i < phoneDetail.length; i++) {
        div.innerHTML += `
        <div style="border: 1px solid black;" class="m-5 p-5 rounded">
        <h3>Brand and model: ${phoneDetail[i].brand} ${phoneDetail[i].model}</h3> 
        <p>Price: ${phoneDetail[i].price}</p>
        <p>RAM: ${phoneDetail[i].ram}</p>
        <p>ROM: ${phoneDetail[i].rom}</p>
        <p>Camera: ${phoneDetail[i].camera}</p>
        <button onclick="deleteItem(${i})" class="btn btn-primary m-2 btn-lg">Delete</button>
        </div>
        `
    }
}
    renderItems()

    function deleteItem(i){
        phoneDetail.splice(i , 1);
        renderItems()
        localStorage.setItem('phoneDetail' , phoneDetail);
    
    }