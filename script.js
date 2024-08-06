const name1 = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const login = document.getElementById('login');
const logout = document.getElementById('logout');


function store() {
    localStorage.setItem('name', name1.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('password', password.value)
}

if (localStorage.length > 0) {
    login.style.display = "none";
    logout.style.display = "block";
}
logout.addEventListener('click', () => {
    let confirmation = confirm("Are u sure u want to logout?")
    if(confirmation == true){
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    login.style.display = "block";
    logout.style.display = "none";
    }
    else{
        login.style.display = "none";
        logout.style.display = "block";
    }

})

// sidebar script
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "block";
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "none";
}

// product page script
let product = document.getElementById('product-container')
async function api(){
    product.innerHTML = '';
    let response = await fetch('https://fakestoreapi.com/products')
    let data = await response.json()
    console.log(data)
    data.forEach(element => {
        product.innerHTML += `<div id="product" class="products">
        <img src="${element.image}" alt="">
        <h5><b id="title">Title:${element.title}</b></h5>
        <h5 id="price">Price:<span class="price-span">${element.price}</span></h5>
        <h5 id="description">${element.description}</h5>
        <button class="product-btn">Add to card</button>
        </div>`
    });
}
api()

