const openShopping = document.querySelector('.shopping');
const closeShopping = document.querySelector('.close-shopping');
const shopping= document.querySelector('.shopping');
const checkoutCart = document.querySelector('.checkout');
const card = document.querySelector('.card');
const list = document.querySelector('.list');

openShopping.addEventListener('click', ()=>{
    shopping.classList.add('active');
})
openShopping.addEventListener('click', ()=>{
    card.classList.add('active');
})

closeShopping.addEventListener('click', ()=>{
    shopping.classList.remove('active');
})

closeShopping.addEventListener('click', ()=>{
    card.classList.remove('active');
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
        products.forEach((key, value)=>{
            const newDiv= document.createElement('div');
            newDiv.classList.add('item');
           
            newDiv.innerHTML= `
            <img src="${key.image}"/>
            <div class="name"> ${key.name}</div>
            <div class="price"> ${key.price}</div>
            <button onClick="addToCart(${key}))"> Add to cart</button>
            `
            list.appendChild(newDiv)
        })

    };
initApp();


