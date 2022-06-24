alert("welcome! Please note your calculation will be performed in the order number1 operation number2")
const operation = prompt("what operation would you like to perform (+, -. * or /)?");
if (operation != "+" && operation != "-" && operation != "*" && operation !="/"){
    answer = "Is an invalid operator";
    console.log(operation, answer);
}

const number1 = parseFloat(prompt("Enter the first number"));
const number2 = parseFloat(prompt("Enter the second number"));

if (operation == "+" && ((number2>=0 || 0<=number2)&& (number1>=0 || 0<=number1))){
    answer = number1 + number2;
    console.log(number1, operation, number2, "is", answer);
    alert(answer);
}
else if (operation == "-" && ((number2>=0 || 0<=number2) && (number1>=0 || 0<=number1))){
    answer = number1 - number2;
    console.log(number1, operation, number2, "is", answer);
    alert(answer)
}
else if (operation == "*" && ((number2>=0 || 0<=number2) && (number1>=0 || 0<=number1))){
    answer = number1*number2;
    console.log(number1, operation, number2, "is", answer);
    alert(answer)
}
else if (operation == "/" && (number2>0 || 0<number2)&& (number1>=0 || 0<=number1)){
    answer = number1 / number2;
    console.log(number1, operation, number2, "is", answer);
    alert(answer)
}
else if (operation == "/" && number2==0){
    answer = "invalid denominator";    
    console.log(number1, operation, number2, "has an", answer);
    alert(answer)
}
else{
    answer = "invalid, try again";    
    console.log(number1, operation, number2, "is", answer);
    alert(answer)
}

