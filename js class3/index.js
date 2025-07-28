//CALCULATOR
var fristNumber =+prompt("Enter your frist Number Or Obtained Number")
var SecNumber =+prompt("Enter your sec Number Or Total Number")
var opreator = prompt("Enter Your Operator (+ , - , / , * , % )")



if (opreator=="+") {
    console.log( fristNumber+SecNumber)
    
}
else if (opreator=="-") {
    console.log(fristNumber-SecNumber) 
}
else if (opreator=="*") {
    console.log(fristNumber*SecNumber)
    
}
else if (opreator=="/") {
    console.log(fristNumber/SecNumber)
    
}
else if (opreator=="%") {
    console.log(fristNumber/SecNumber*100+"%")

    
}



