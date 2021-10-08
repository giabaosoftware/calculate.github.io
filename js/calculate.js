//jshint esversion: 6
let numArr = new Array;
let num = "";
let total = 0;

function number0(){
    num += 0;
    document.getElementById("result").value = parseFloat(num);
    return num;
}

function number1() {
    num += document.getElementById("num1").value;
    document.getElementById("result").value = parseFloat(num);
    return num;
}

function number2() {
    num += document.getElementById("num2").value;
    document.getElementById("result").value = parseFloat(num);
    return num;
}

function number3() {
    num += document.getElementById("num3").value;
    document.getElementById("result").value = parseFloat(num);
    return num;
}

function number4() {
    num += document.getElementById("num4").value;
    document.getElementById("result").value = parseFloat(num);
    return num;
}

function number5() {
    num += document.getElementById("num5").value;
    document.getElementById("result").value = parseFloat(num);
    return num;
}

function number6() {
    num += document.getElementById("num6").value;
    document.getElementById("result").value = parseFloat(num);
    return num;
}

function number7() {
    num += document.getElementById("num7").value;
    document.getElementById("result").value = parseFloat(num);
    return num;
}

function number8() {
    num += document.getElementById("num8").value;
    document.getElementById("result").value = parseFloat(num);
    return num;
}

function number9() {
    num += document.getElementById("num9").value;
    document.getElementById("result").value = parseFloat(num);
    return num;
}

//Plus done
function plus(){
    //check push to arr
    if(num !== 0){
        numArr.push(parseFloat(num));
    }

    //reset number input
    num = 0;

    //plus function
    total = numArr.reduce((num1, num2) => {
        return num1 + num2;
    }, 0);

    //set numArr length = 1
    numArr = [total];
    console.log(total);
    console.log(numArr);

    //display
    document.getElementById("result").value = total;
}

//Subtract done
function subtraction(){
    //check push to arr
    if(num !== 0){
        numArr.push(parseFloat(num));
    }
    console.log(numArr);

    //reset number input
    num = 0;

    //subtract function
    total = numArr.reduce((num1, num2) => {
        return num1 - num2;
    });

    //set numArr length = 1
    numArr = [total];

    //display
    document.getElementById("result").value = total;

}

// Error
function mult(){
    
}

//Error
function division(){
    
}

function equal(){
    document.getElementById("result").value = total;
}