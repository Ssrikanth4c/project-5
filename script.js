let restaurantData=
{search:[
    { restaurantName:'restaurant_1',
     data:[
            {       
                FoodItem: 'Dal fry',
                price:'165',
                img: 'https://via.placeholder.com/150'
            },
            {       
                FoodItem: 'Green Salad',
                price:'120',
                img: 'https://via.placeholder.com/150'
            },
            {       
                FoodItem: 'Masala Peanut',
                price:'140',
                img: 'https://via.placeholder.com/150'
            },
            {       
                FoodItem: 'Dal fry',
                price:'165',
                img: 'https://via.placeholder.com/150'
            },
            {       
                FoodItem: 'Mashroom Masala',
                price:'240',
                img: 'https://via.placeholder.com/150'
            },
            {       
                FoodItem: 'Masala Peanut',
                price:'140',
                img: 'https://via.placeholder.com/150'
            },
            
            {       
                FoodItem: 'Mashroom Masala',
                price:'240',
                img: 'https://via.placeholder.com/150'
            }
        ]
    },
    { restaurantName:'restaurant_2',
      data:[
        {       
            FoodItem: 'Green Salad',
            price:'120',
            img: 'https://via.placeholder.com/150'
        },
       
        {       
            FoodItem: 'Dal fry',
            price:'165',
            img: 'https://via.placeholder.com/150'
        },
        {       
            FoodItem: 'Masala Peanut',
            price:'140',
            img: 'https://via.placeholder.com/150'
        },
        {       
            FoodItem: 'Mashroom Masala',
            price:'240',
            img: 'https://via.placeholder.com/150'
        },
        {       
            FoodItem: 'Masala Peanut',
            price:'140',
            img: 'https://via.placeholder.com/150'
        },
        {       
            FoodItem: 'Dal fry',
            price:'165',
            img: 'https://via.placeholder.com/150'
        },
        {       
            FoodItem: 'Mashroom Masala',
            price:'240',
            img: 'https://via.placeholder.com/150'
        }
    ]},
    {restaurantName:'restaurant_3',
    data:[

        {       
            FoodItem: 'Green Salad',
            price:'120',
            img: 'https://via.placeholder.com/150'
        },
        {       
            FoodItem: 'Masala Peanut',
            price:'140',
            img: 'https://via.placeholder.com/150'
        },
        {       
            FoodItem: 'Mashroom Masala',
            price:'240',
            img: 'https://via.placeholder.com/150'
        },
        
        {       
            FoodItem: 'Mashroom Masala',
            price:'240',
            img: 'https://via.placeholder.com/150'
        },
        {       
            FoodItem: 'Masala Peanut',
            price:'140',
            img: 'https://via.placeholder.com/150'
        },
        {       
            FoodItem: 'Dal fry',
            price:'165',
            img: 'https://via.placeholder.com/150'
        },
        {       
            FoodItem: 'Dal fry',
            price:'165',
            img: 'https://via.placeholder.com/150'
        },
        
    ]
    }]
} 
// **************> Add restaurant data to local storage<****************
// if not available in local storage then only  added this data
if(localStorage.getItem('resataurantData')==undefined){
    localStorage.setItem('resataurantData', JSON.stringify(restaurantData))
} 

let addFoodItems= document.getElementById('addFoodItems')
let search= document.getElementById('search')
let searchBtn= document.getElementById('searchBtn')

//search restaurant name in restaurant data if it is found display data on webpage
searchBtn.addEventListener('click', function(){
    addFoodItems.innerHTML=''
    const data=JSON.parse(localStorage.resataurantData)
    
    data.search.forEach(foodItem=>{
        if(foodItem.restaurantName==search.value){
            rendorDom(foodItem.data)
            // addFoodItems.innerHTML=JSON.stringify(foodItem.data)
        }
    })
})

function rendorDom(data){
    console.log(data.length)
    data.forEach(ele=>{
        const imgs='https://via.placeholder.com/200'
        let col1= document.createElement('div')
        col1.setAttribute('class', 'card col-xl-4 col-md-4 col-sm-12 my-2')
        let img= document.createElement('img')
        img.setAttribute('class', 'img-fluid')
        img.setAttribute('src',`${imgs}`)
        let cardBody= document.createElement('div')
        cardBody.setAttribute('class','card-body text-center row')
        cardBody.innerHTML=`<div class='col-12'><h3>${ele.FoodItem}</h3> <b class='mx-3 col-6'>$${ele.price}</b><button class='btn btn-primary col-6'>Add</button>`
        col1.append(img, cardBody)
        addFoodItems.append(col1)        
    })
}
//hide your order bar until get cart data
let yourOrder= document.getElementById('yourOrder')
    yourOrder.style.display='None'

//add order
let i=0
let addOrder= document.getElementById('addFoodItems')
addOrder.addEventListener('click', addtoCart)
function addtoCart(event){
    let addtoCart={}
    if(event.target.type==='submit'){
        let subTotal=0
        let itemName= event.target.parentNode.children[0].innerText
        let  price= event.target.parentNode.children[1].innerText
        subTotal+=Number(price.substr(1))
        addtoCart.itemName= itemName
        addtoCart.price= price
        addtoCart.subTotal=subTotal
        
    }
    //send cart details to your Order
    i++
    sendToCart.call(addtoCart, i)
}

// add Item details to oderd bar
let subTotal=0
function sendToCart(i){
    yourOrder.style.display='block'
    subTotal+= this.subTotal
    
    //add  subTotal to yourOrder block
    var order2= document.getElementById('order2')
    order2.innerHTML=`$${subTotal}`
    console.log(this.subTotal)
    let finalOrder={}
    finalOrder
    let orderCount= document.getElementById('order1')
    orderCount.innerHTML=`Your Order(${i})`
    showOrderDetails.call(this, subTotal, i)

}

//show orders and orders list
var showOrders= document.getElementById('showOrders')
showOrders.addEventListener('click', showOrderDetails)

function showOrderDetails(){

}


