
 var quantity = 1;
 var name ='';
 var price = 0;
 var cart = [];
 var repeat;
 var total = 0;
 var foodId = '';
 
 
 
 function add()
{ 
    
    var myFood = event.srcElement.id;
    console.log(myFood);

    var itemChecked = {name, price, quantity, foodId}
    cart.push(itemChecked);
    // var foundIndex = cart.findIndex(function(el){
    //     console.log("Food id: " + foodId);
    //     console.log("Food index: " + foundIndex);
    //     //console.log(myFood);
        
    //     //el.foodId.toLowerCase() == myFood.toLowerCase();
    // })
    var foundIndex = cart.indexOf(name);
    console.log(foundIndex);

    //console.log("Found index: " + foundIndex)
    
    if(foundIndex > -1){
        cart[foundIndex].quantity += 1;
        console.log("Found"  + cart[foundIndex].quantity);
    }
    else{
        cart.push(itemChecked);
    }


    var x  = event.srcElement.id

    var table = document.getElementById("ordertable");

    var headers = table.insertRow(-1);
    var itemHeader = headers.insertCell(0);
    var priceHeader = headers.insertCell(1);
    var quantityHeader = headers.insertCell(2);
    var totalHeader = headers.insertCell(3);
    var deleteHeader = headers.insertCell(4);
    
    
    deleteHeader.innerHTML = '<button class="delete1">Remove Item</button>'
    deleteHeader.style.border = "none"
    //__________________
   // Switch
  switch (x){
    case 'americano': name = "Americano", price = 3, foodId="americano";
    break;
    case "cake": name = "Cake of the day", price = 8, foodId="cake";
    break;
    case "latte": name = "Latte", price = 4, foodId="latte";
    break;
    case "cupcakes": name = "Cupcakes", price = 5, foodId="cupcakes";
    break;
    case "cappuccino": name = "Cappuccino", price = 4, foodId="cappuccino";
    break;
    case "croissants": name = "Croissants", price = 3, foodId="croissants";
    break;
    case "icoffee": name = "Iced Coffee", price = 4, foorId="icoffee";
    break;
    case "garlic": name = "Garlic Bread", price = 4, foodId="garlic";
    break;
    return }
    
   itemHeader.innerHTML = name;
   priceHeader.innerHTML = price.toString();
   quantityHeader.innerHTML = quantity.toString();
   totalHeader.innerHTML = (price * quantity).toString();
   total += Math.floor(totalHeader.innerHTML);
   document.getElementById("totaltext").innerHTML = `Your total: $${total.toString()}`;
   
   var deletebtn = document.getElementsByClassName('delete1') 
   
   for(var i = 0; i<deletebtn.length; i++){
       var button = deletebtn[i]
       button.addEventListener('click', function(event){
         var buttonClicked = event.target
         buttonClicked.parentElement.parentElement.remove()
         Recalculatetotal();
       })
   }
}

function Recalculatetotal(){
    total = 0;
    var rows = document.getElementById('ordertable').rows;
    for(var i = 1; i < rows.length;i++){
        var cell = parseInt(rows[i].cells[3].innerHTML)
        total += cell
    }
    document.getElementById("totaltext").innerHTML = `Your total: ${total.toString()}`;
return
}

//__________________________________
//modal

var modal =  document.getElementById("simplemodal");
var btn = document.getElementById("modalbtn");
var clsbtn = document.getElementsByClassName("closebtn")[0];
var clrbnt = document.getElementById('clear');

btn.addEventListener('click',openmodal);
clsbtn.addEventListener('click',closemodal);
window.addEventListener('click', clickoutside);
clrbnt.addEventListener('click', clear)

function openmodal()
{
   modal.style.display = 'block';
  
}
function closemodal() 
{
   modal.style.display = 'none';

}

function clickoutside(){
    if (event.target == modal){
        modal.style.display = 'none';
    }
}
function getID(e){
    e = e || window.event;
    e = e.target || e.srcElement;
}

function clear(){ 
    var totalTextZero = document.getElementById("totaltext")
    console.log(total);
    totalTextZero.innerHTML = 0;
    
    modal.style.display = 'block';
    var rows = document.getElementById('ordertable').rows;
    
    for(var i = rows.length - 1; i > 1; i--){
        document.getElementById('ordertable').deleteRow(i);
    }
    document.getElementById('ordertable').deleteRow(i);
    
}