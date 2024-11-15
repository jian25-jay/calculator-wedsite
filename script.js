// Function to append numbers/operators to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to perform the calculation
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value) || '';
    } catch (error) {
        alert("Invalid expression");
        clearDisplay();
    }
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to clear the last entry
function clearEntry() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to handle operators
function operate(operator) {
    const display = document.getElementById('display');
    const lastChar = display.value[display.value.length - 1];

    if (['+', '-', '*', '/'].includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        appendToDisplay(operator);
    }
}

// Function to calculate the square root
function sqrt() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    
    if (isNaN(value)) {
        alert("Enter a valid number first!");
    } else {
        display.value = Math.sqrt(value);
    }
}
