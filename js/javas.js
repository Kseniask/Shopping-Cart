
var today = new Date();
var hourNow = today.getHours();
var greeting ='';
var para = document.createElement("P");
if(hourNow >= 18){
    greeting = "Good evening!";
}
else if(hourNow >=12){
    greeting = "Good afternoon";
}
else {
    greeting = "Good morning";
    }
document.getElementById("daytime").innerHTML = greeting;

   function orderFunction()
    {
       //document.getElementById("pic").style.paddingBottom = "200px";
        document.getElementById("lottery").innerHTML = "Guess the number I am thinking of. If you guess it rigth you will winn a 15% discount. Ready? Input the number below:";
        document.getElementById("inputtext").style.display = "block";
    }
        var nn = Math.floor(Math.random()*10)+1;
    function playfunction(){
        document.getElementById("inputtext").style.display = "block";

        var number = document.getElementById("n1").value;
        
        if(number == nn)
        {
            document.getElementById("lottery").innerHTML = "Congratulations!You have a discount of 15%. Here is the code! WINNER23. Show the discount code to the cashier when you are about to pay."
            document.getElementById("hint").innerHTML = ""
        }
        else if(number > nn)
        { 
            document.getElementById("hint").innerHTML = "Oops. You still have a chance. Enter less number"
        }
        else if(number < nn)
        { 
            document.getElementById("hint").innerHTML = "Oops. You still have a chance. Enter bigger number"
        }
        }

        