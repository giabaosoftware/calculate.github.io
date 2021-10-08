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

function plus(){
    console.log(typeof num);
    numArr.push(parseFloat(num));
    console.log(numArr);
    num = 0;
    document.getElementById("result").value = total;
    total = numArr.reduce((num1, num2) => {
        return num1 + num2;
    }, 0);
    numArr = [total];
}

function subtraction(){
    console.log(typeof num);
    numArr.push(parseFloat(num));
    console.log(numArr);
    num = 0;
    document.getElementById("result").value = total;
    total = numArr.reduce((num1, num2) => {
        return num1 - num2;
    }, 0);
    numArr = [total];
}

function mult(){
    console.log(typeof num);
    numArr.push(parseFloat(num));
    console.log(numArr);
    document.getElementById("result").value = total;
    total = numArr.reduce((num1, num2) => {
        return num1 * num2;
    }, 1);
    numArr = [total];
}

function plus(){
    console.log(typeof num);
    numArr.push(parseFloat(num));
    console.log(numArr);
    num = 0;
    document.getElementById("result").value = total;
    total = numArr.reduce((num1, num2) => {
        return num1 + num2;
    }, 0);
    numArr = [total];
}



function equal(){
    document.getElementById("result").value = total;
}