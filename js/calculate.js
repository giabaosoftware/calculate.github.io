//jshint esversion: 6

let num = "";
let numArr = [];
let result;
let elResult = document.getElementById("result");
let functionIndex;
let setDefault = 0;

function getNumber(val){
    num += val; //get number
    display(parseFloat(num), elResult); //display number
}

function calculateFunction(val){
    pushNumberToArray(num, numArr);

    functionIndex = val;

    let plusIndex = 1;
    let subtractIndex = 2;
    let multipleIndex = 3;
    let divisionIndex = 4;

    switch(functionIndex){
        case plusIndex: 
            result = plus(numArr);
            display(" +", elResult);
            break;
        case subtractIndex:
            result = subtract(numArr);
            display(" -", elResult);
            break;
        case multipleIndex:
            result = multiple(numArr);
            display(" x", elResult);
            break;
        case divisionIndex:
            result = division(numArr);
            display(" /", elResult);
            break;
    }
    cleanArray(result, numArr);
    num = setDefault;
    return result;
}

function equal(){
    display(calculateFunction(functionIndex), elResult);
}

function resetAll(){
    num = setDefault;
    numArr.length = setDefault;
    result = setDefault;
    display(result, elResult);
}

function pushNumberToArray(val, array) {
    if (typeof val !== "number"){
        array.push(parseFloat(val));
    }
}

function cleanArray(val, array){
    array = [val];
}

function display(val, element){
    element.value = val;
}

function division(array){
    let total;
    total = array.reduce((num1, num2 = 1) => {
        return num1 / num2;
    });
    return total;
}

function multiple(array){
    let total;
    total = array.reduce((num1, num2) => {
        return num1 * num2;
    }, 1);
    return total;
}

function subtract(array){
    let total;
    total = array.reduce((num1, num2) => {
        return num1 - num2;
    });
    return total;
}

function plus(array){
    let total;
    total = array.reduce((num1, num2) => {
        return num1 + num2;
    }, 0);
    return total;
}