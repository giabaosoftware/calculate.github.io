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
    //function index - plus: 1, subtract: 2, multiple: 3, division: 4
    index = i; 
    //check number input
    if (typeof num !== "number"){
        numArr.push(parseFloat(num));
    }
    //check index to calculate function
    if (i === 1){
        //plus function
        result = numArr.reduce((num1, num2) => {
            return num1 + num2;
        }, 0);
         //display icon
        elResult.value = " +";
    } else if(i === 2){
        //subtract function
        result = numArr.reduce((num1, num2) => {
            return num1 - num2;
        });
        //display icon
        elResult.value = " -";
    } else if(i === 3){
        //multiple function
        result = numArr.reduce((num1, num2) => {
            return num1 * num2;
        }, 1);
         //display icon
        elResult.value = " x";
    } else if(i === 4){
        //division function
        result = numArr.reduce((num1, num2 = 1) => {
            return num1 / num2;
        });
         //display icon
        elResult.value = " /";
    }
    //clear array
    numArr = [result];
    //reset number
    num = 0;
    //return result
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