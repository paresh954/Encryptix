let displayValue = '';

function appendNumber(number) {
    // Prevent adding more than one decimal point in a number
    if (number === '.' && displayValue.includes('.')) return;

    displayValue += number;
    document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
    // Prevent adding an operator at the beginning or consecutively
    if (displayValue === '' || isOperator(displayValue.slice(-1))) return;

    displayValue += ` ${operator} `;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function deleteDigit() {
    if (displayValue.length > 0) {
        displayValue = displayValue.slice(0, -1);
        document.getElementById('display').value = displayValue;
    }
}

function calculateResult() {
    // Prevent calculation if the last character is an operator
    if (isOperator(displayValue.slice(-1))) {
        document.getElementById('display').value = 'Error';
        return;
    }

    try {
        let expression = displayValue.replace(/×/g, '*').replace(/÷/g, '/');
        let result = eval(expression); // Evaluate the expression
        document.getElementById('display').value = result;
        displayValue = result.toString(); // Update the displayValue with result
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

function isOperator(character) {
    return ['+', '-', '*', '/'].includes(character);
}
