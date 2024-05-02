let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.close-shopping');
let body = document.querySelector('body')
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');


openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})

closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})


let products =[
        {  
        id:1,
        name:'Product name 1',
        image: './images/1.jpg',
        price:1200
        },
        {
            id:2,
            name:'Product name 2',
            image: './images/2.jpg',
            price:1250
    
        },
        {
            id:3,
            name:'Product name 3',
            image: './images/3.jpg',
            price:5200
    
        },  
        {  
            id:4,
            name:'Product name 4',
            image: './images/1.jpg',
            price:1200
            },
            {
                id:5,
                name:'Product name 5',
                image: './images/2.jpg',
                price:1250
        
            },
            {
                id:6,
                name:'Product name 6',
                image: './images/3.jpg',
                price:5200
        
            }, 
];

let listCards=[];
    function initApp(){
        products.forEach((value, key)=>{
            const newDiv = document.createElement('div');
            newDiv.classList.add('item');
            newDiv.innerHTML= `
            <img src="${value.image}"/>
            <div class="name"> ${value.name}</div>
            <div class="price"> ${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})"> Add to card</button>
            `
            list.appendChild(newDiv)
        })
    };
initApp();

function addToCart(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard()
}
 function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totolPrice = 0;
    listCards.forEach((value, key)=>{
        totolPrice = totolPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv= document.createElement('li');
            newDiv.innerHTML= `
            <img src="/${value.image}" />
            <div class="name">${value.name} </div>
            <div class="price">${value.price.toLocaleString()}</div>
            <div>
                <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <button class="count">${value.quantity}</button>
                <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText= totolPrice.toLocaleString()
    quantity.innerText= count;
}
function changeQuantity(key, quantity){
      if(quantity ==0){
        delete listCards[key];
    } else {
        listCards[key].quantity =quantity;
        listCards[key].price =quantity * products[key].price
  
    }
    reloadCard()
}
