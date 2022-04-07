
 /*
 
 This example covers a wide range of JavaScript features. 
 - JS and DOM
 - Event Listeners 
 - variables 
 - functions 
 - if else conditionals and logic
 - Arrays 
 - Objects
 
 */


 document.querySelector('body').onclick = (e) => {
   console.log('---------------------------------')
   console.log(e.target)
 }

 const addForm = document.getElementById('add-form')
 const inputName = document.getElementById('name')
 const inputPrice = document.getElementById('price')
 const itemsList = document.getElementById('items')
 const divTotal = document.getElementById('total')

 const cart = []

 addForm.onsubmit = function(e) {
   e.preventDefault()
   const name = inputName.value
   const price = inputPrice.value
   
   addToCart(name, price)
   showCart()
 }

 itemsList.onclick = function(e) {
   console.log(e.target)
   if (e.target && e.target.classList.contains('remove')) {
     console.log(e.target.dataset.name)
     removeFromCart(e.target.dataset.name)
   } else if (e.target && e.target.classList.contains('add-one')) {
     addToCart(e.target.dataset.name)
   } else if (e.target && e.target.classList.contains('remove-one')) {
     removeFromCart(e.target.dataset.name, 1)
   }
 }

 itemsList.onchange = function(e) {
   if (e.target && e.target.classList.contains('update')) {
     const qty = parseInt(e.target.value)
     const name = e.target.dataset.name
     updateCart(name, qty)

   }
 }

 function addToCart(name, price) {
   for (let i = 0; i < cart.length; i += 1) {
     if (cart[i].name === name) {
       cart[i].qty += 1
       showCart()
       return true
     }
   }
   cart.push({ name, price, qty: 1})
   showCart()
 }

 function removeFromCart(name, qty = 0) {
   console.log(name, qty)
   for (let i = 0; i < cart.length; i += 1) {
     if (cart[i].name === name) {
       if (qty) {
         let newQty = cart[i].qty - qty
         if (newQty > 0) {
           cart[i].qty = newQty
         } else {
           cart.splice(i, 1)
         }
       } else {
         cart.splice(i, 1)
       }
     }
   }

   showCart()
 }

 function showCart() {
   let str = ''
   for (let i = 0; i < cart.length; i += 1) {
     str += `
       <span>
         <button class="remove" data-name="${cart[i].name}">remove</button>
         ${cart[i].name} ${cart[i].price} each 
         x ${cart[i].qty} = ${(cart[i].qty * cart[i].price).toFixed(2)}
       </span>
       <span>

         <button class="add-one" data-name="${cart[i].name}"> + </button>
         <button class="remove-one" data-name="${cart[i].name}"> - </button>

       </span>
       <br>
     `
   }
   itemsList.innerHTML = str
   divTotal.innerHTML = getTotal()
 }

 function getTotal() {
   let total = 0
   for (let i = 0; i < cart.length; i += 1) {
     total += cart[i].price * cart[i].qty
   }
   return total.toFixed(2)
 }

 function updateCart(name, qty) {
   for (let i = 0; i < cart.length; i += 1) {
     if (cart[i].name === name) {
       cart[i].qty = qty
       showCart()
       return true
     }
   }
   return false
 }

 // addToCart('Apple', .99)
 // addToCart('Apple', .99)
 // addToCart('Orange', 1.29)
 
 showCart()

 getTotal()




/*
      


//create array that will hold all ordered products
var shoppingCart = [];

//this function manipulates DOM and displays content of our shopping cart
function displayShoppingCart(){
    var orderedProductsTblBody=document.getElementById("orderedProductsTblBody");
    //ensure we delete all previously added rows from ordered products table
    while(orderedProductsTblBody.rows.length>0) {
        orderedProductsTblBody.deleteRow(0);
    }

    //variable to hold total price of shopping cart
    var cart_total_price=0;
    //iterate over array of objects
    for(var product in shoppingCart){
        //add new row      
        var row=orderedProductsTblBody.insertRow();
        //create three cells for product properties 
        var cellName = row.insertCell(0);
        var cellDescription = row.insertCell(1);
        var cellPrice = row.insertCell(2);
        cellPrice.align="right";
        //fill cells with values from current product object of our array
        cellName.innerHTML = shoppingCart[product].Name;
        cellDescription.innerHTML = shoppingCart[product].Description;
        cellPrice.innerHTML = "$" + shoppingCart[product].Price  + '<input type="button" class="remove-item" value="X" onclick="removeThing()"/>';
        cart_total_price+=shoppingCart[product].Price;
    }
    //fill total cost of our shopping cart 
    var epiccart_total_price = "$" + Math.floor(cart_total_price * 100)/100;
    document.getElementById("cart_total").innerHTML=epiccart_total_price;
}



function removeThing(){
console.log(shoppingCart)
    var td = event.target.parentNode; 
    var tr = td.parentNode; // the row to be removed
    tr.parentNode.removeChild(tr);
}

function AddtoCart(name,description,price){
   //Below we create JavaScript Object that will hold three properties you have mentioned:    Name,Description and Price
   var singleProduct = {};
   //Fill the product object with data
   singleProduct.Name=name;
   singleProduct.Description=description;
   singleProduct.Price=price;
   //Add newly created product to our shopping cart 
   shoppingCart.push(singleProduct);
   //call display function to show on screen
   displayShoppingCart();

}  


//Add some products to our shopping cart via code or you can create a button with onclick event
//AddtoCart("Table","Big red table",50);
//AddtoCart("Door","Big yellow door",150);"
//AddtoCart("Car","Ferrari S23",150000);






var checks = document.querySelectorAll('.remove-item');

checks.forEach(function(check){
  check.addEventListener('click', checkIndex);
})

function checkIndex(event){
  console.log( Array.from(checks).indexOf(event.target) );
}
*/