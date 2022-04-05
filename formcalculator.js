

      


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