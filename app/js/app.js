const defaultResult = 0;
let currentResult = defaultResult;
let logEntries  = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createOutput(operator, resultBeforeCalculation, calculatedNumber){

  const calcDescription = `${resultBeforeCalculation} ${operator} ${calculatedNumber}`
  outputResult(currentResult, calcDescription);
}
function writeToLog(operation, previousResult, enteredNumberLog, currentResultLog) {

    const logEntry = {
        operation: operation,
        previousResult: previousResult,
        enteredNumberLog: enteredNumberLog, 
        currentResultLog: currentResultLog
    };
    logEntries.push(logEntry);
    console.log(logEntries);
    
}

function add(){
    const enteredNumber = getUserNumberInput(); 
    const initialResult = currentResult; 
    currentResult += enteredNumber;
    createOutput('+', initialResult, enteredNumber ); 
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}
function sub(){
    const enteredNumber = getUserNumberInput(); 
    const initialResult = currentResult; 
    currentResult -= enteredNumber;
    createOutput('-', initialResult, enteredNumber ); 
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}
function multiply(){
    const enteredNumber = getUserNumberInput(); 
    const initialResult = currentResult; 
    currentResult *= enteredNumber;
    createOutput('x', initialResult, enteredNumber ); 
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide(){
    const enteredNumber = getUserNumberInput(); 
    const initialResult = currentResult; 
    currentResult /= enteredNumber;
    createOutput('/', initialResult, enteredNumber ); 
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addButton.addEventListener('click', add);
subtractButton.addEventListener('click', sub);
multiplyButton.addEventListener('click', multiply);
divideButton.addEventListener('click', divide);


