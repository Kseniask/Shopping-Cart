
 var quantity = 1;
 var name ='';
 var price = 0;
 var cart = []
 var repeat;
 var total = 0;
 
 
 
 function add()
{ 
    var itemChecked = {name, price, quantity: 1}
    cart.push(itemChecked)

    var x  = event.srcElement.id

    var table = document.getElementById("ordertable");

    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    
    
    cell5.innerHTML = '<button class="delete1">Remove Item</button>'
    cell5.style.border = "none"
    //__________________
   // Switch
  switch (x){
    case 'americano': name = "Americano", price = 3;
    break;
    case "cake": name = "Cake of the day", price = 8;
    break;
    case "latte": name = "Latte", price = 4;
    break;
    case "cupcakes": name = "Cupcakes", price = 5;
    break;
    case "cappuccino": name = "Cappuccino", price = 4;
    break;
    case "croissants": name = "Croissants", price = 3;
    break;
    case "icoffee": name = "Iced Coffee", price = 4;
    break;
    case "garlic": name = "Garlic Bread", price = 4;
    break;
    return }
   cell1.innerHTML = name;
   cell2.innerHTML = price.toString();
   cell3.innerHTML = quantity.toString();
   cell4.innerHTML = (price * quantity).toString();
   total += Math.floor(cell4.innerHTML);
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
    modal.style.display = 'block';
    var rows = document.getElementById('ordertable').rows;
    total = 0
   
    for(var i = 1; i < rows.length-1;i++){
        document.getElementById('ordertable').deleteRow(i);

    }
    }


