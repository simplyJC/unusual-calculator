const userInput = document.getElementById('input-number');
const addButton = document.getElementById('button-add');
const subtractButton = document.getElementById('button-subtract');
const multiplyButton = document.getElementById('button-multiply');
const divideButton = document.getElementById('button-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculation = document.getElementById('current-calculation');

function outputResult(result, text)
 {
     currentResultOutput.textContent = result;
     currentCalculation.textContent = text; 
 }