//jshint esversion: 6
let num = "";
let numArr = [];
let result = 0;
let index;
let elResult = document.getElementById("result");

function number(val){
    //get number
    num += val;
    //display number
    elResult.value = parseFloat(num);
    return num;
}

function calculate(i){
    index = i;
    if (typeof num !== "number"){
        numArr.push(parseFloat(num));
    }
    if (i === 1){
        result = numArr.reduce((num1, num2) => {
            return num1 + num2;
        }, 0);
        elResult.value = " +";
    } else if(i === 2){
        result = numArr.reduce((num1, num2) => {
            return num1 - num2;
        });
        elResult.value = " -";
    } else if(i === 3){
        result = numArr.reduce((num1, num2) => {
            return num1 * num2;
        }, 1);
        elResult.value = " x";
    } else if(i === 4){
        result = numArr.reduce((num1, num2 = 1) => {
            return num1 / num2;
        });
        elResult.value = " /";
    }
    numArr = [result];
    num = 0;
    return result;
}

function equal(){
    //display result
    elResult.value = calculate(index);
}

function resetFunc(){
    //clear all
    result = 0;
    numArr.length = 0;
    num = 0;
    elResult.value = result;
}