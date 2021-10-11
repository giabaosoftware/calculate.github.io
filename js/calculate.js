//jshint esversion: 6
let num = "";
let numArr = [];
let result;
let elResult = document.getElementById("result");
let functionIndex;
let setDefault = 0;

/* Main Function */
function getNumber(val){
    num += val;
    display(parseFloat(num), elResult);
    return num;
} //Input number

function calculate(val){
    pushNumberToArray(getNumber(), numArr);

    let [plusIndex, subtractIndex, multipleIndex, divisionIndex] = [1, 2, 3, 4];
    functionIndex = val;
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

    getFirstIndex(result, numArr);
    num = setDefault;
    return result;
} //calculate number input

function equal(){
    display(calculate(functionIndex), elResult);
} //display output

function resetAll(){
    num = setDefault;
    numArr.length = setDefault;
    result = setDefault;
    display(result, elResult);
} //reset input


/* Reuse Function */
function pushNumberToArray(val, array) {
    if (typeof val !== "number"){
        array.push(parseFloat(val));
    }
}

function getFirstIndex(val, array){
    array = [val];
}

function display(val, element){
    element.value = val;
}

function division(array){
    return array.reduce((num1, num2 = 1) => {
        return num1 / num2;
    });
}

function multiple(array){
    return array.reduce((num1, num2) => {
        return num1 * num2;
    }, 1);
}

function subtract(array){
    return array.reduce((num1, num2) => {
        return num1 - num2;
    });
}

function plus(array){
    return array.reduce((num1, num2) => {
        return num1 + num2;
    }, 0);
}