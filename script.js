function chMode() {
    let mode = document.getElementById('mode'); // Assuming 'mode' is the ID of your mode toggle element
    let body = document.querySelector('body');

    mode.className == 'fa-solid fa-sun' ?
        (mode.className = 'fa-solid fa-moon', body.setAttribute('data-theme', 'dark'), body.style.backgroundColor = '#333') :
        (mode.className = 'fa-solid fa-sun', body.setAttribute('data-theme', 'light'), body.style.backgroundColor = '#fff');
}

// ... (Other functions if any)

// Your existing code for other functions



/* function chMode() {
    mode.className == 'fa-solid fa-sun'?
    mode.className = 'fa-solid fa-moon':
    mode.className = 'fa-solid fa-sun';

    let body = document.querySelector('body');
    mode.classList.contains('fa-sun') ?
    body.setAttribute('data-theme', 'dark') :
    body.setAttribute('data-theme', 'light') ;
}


EXPLANATION :  

function chMode() {
    // Get the element with the ID 'mode' (this should be your moon/sun icon)
    let mode = document.getElementById('mode');

    // Get the body element of the HTML document
    let body = document.querySelector('body');

    // Check if the current mode is 'fa-sun' (light mode)
    if (mode.className == 'fa-solid fa-sun') {
        // If it is, switch to 'fa-moon' (dark mode)
        mode.className = 'fa-solid fa-moon';
        // Set the data-theme attribute of the body to 'dark'
        body.setAttribute('data-theme', 'dark');
        // Set the background color of the body to a dark color (#333)
        body.style.backgroundColor = '#333';
    } else {
        // If the current mode is not 'fa-sun' (assumed to be 'fa-moon'), switch to 'fa-sun' (light mode)
        mode.className = 'fa-solid fa-sun';
        // Set the data-theme attribute of the body to 'light'
        body.setAttribute('data-theme', 'light');
        // Set the background color of the body to a light color (#fff)
        body.style.backgroundColor = '#fff';
    }
}


*/
/* function calc() {
    var replaced = res.value;
    if (res.value.includes('÷') || res.value.includes('×')) {
        replaced = res.value.replaceAll('×', '*').replaceAll('÷', '/');
        res.value = eval(replaced);
    }
    res.value = eval(replaced);
}

*/

/*
 function calc() {
    var expression = res.value;

    // Replace '×' with '*' and '÷' with '/'
    expression = expression.replaceAll('×', '*').replaceAll('÷', '/');

    // Use custom functions for basic arithmetic operations
    expression = expression.replace(/(\d+(\.\d+)?)\s*([+\-*/
/*])\s*(\d+(\.\d+)?)/g, function(match, num1, _, operator, num2) {
        switch (operator) {
            case '+':
                return add(parseFloat(num1), parseFloat(num2));
            case '-':
                return subtract(parseFloat(num1), parseFloat(num2));
            case '*':
                return multiply(parseFloat(num1), parseFloat(num2));
            case '/':
                if (parseFloat(num2) !== 0) {
                    return divide(parseFloat(num1), parseFloat(num2));
                } else {
                    return 'Error';
                }
            default:
                return match; // Return the original match if the operator is not recognized
        }
    });

    // Set the result back to the display
    res.value = expression;
}
*/

// User-defined functions for basic arithmetic operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


document.addEventListener('keydown', function(event) {
    if (event.key === "Backspace") {
        backspace();
    }
});

function backspace() {
    const currentDisplay = document.getElementById('res'); // Assuming 'res' is the ID of your display/input field
    currentDisplay.value = currentDisplay.value.slice(0, -1);
}


//function appendToDisplay(value) {
  //  const currentDisplay = document.getElementById('res'); // Assuming 'res' is the ID of your display/input field

    // Check if the last character is an operator and clear it
   // if ('+-*/'.includes(currentDisplay.value.slice(-1))) {
    //    currentDisplay.value = currentDisplay.value.slice(0, -1);
    // }

    // Clear the display if the previous input was a result
    // if (currentDisplay.getAttribute('data-previous-value') !== null) {
     //   currentDisplay.value = '';
      //  currentDisplay.removeAttribute('data-previous-value');
       // currentDisplay.removeAttribute('data-current-operator');
    //}

    // Append the new value to the display
    //currentDisplay.value += value;
//  }


function calc() {
    var expression = res.value;

    // Replace '×' with '*' and '÷' with '/'
    expression = expression.replaceAll('×', '*').replaceAll('÷', '/');

    // Use custom functions for basic arithmetic operations
    expression = expression.replace(/(\d+(\.\d+)?)\s*([+\-*/])\s*(\d+(\.\d+)?)/g, function(match, num1, _, operator, num2) {
        switch (operator) {
            case '+':
                return add(parseFloat(num1), parseFloat(num2));
            case '-':
                return subtract(parseFloat(num1), parseFloat(num2));
            case '*':
                return multiply(parseFloat(num1), parseFloat(num2));
            case '/':
                if (parseFloat(num2) !== 0) {
                    return divide(parseFloat(num1), parseFloat(num2));
                } else {
                    return 'Error';
                }
            default:
                return match; // Return the original match if the operator is not recognized
        }
    });

    // Set the result back to the display
    res.value = expression;

    // Store the result as the previous value for further calculations
    res.setAttribute('data-previous-value', expression);
}


function appendToDisplay(value) {
    const currentDisplay = document.getElementById('res'); // Assuming 'res' is the ID of your display/input field

    // Check if the last character is an operator and clear it
    if ('+-*/'.includes(value)) {
        clearDisplay();
    }

    // Clear the display if the previous input was a result
    if (currentDisplay.getAttribute('data-previous-value') !== null) {
        clearDisplay();
    }

    // Append the new value to the display
    currentDisplay.value += value;
}

function clearDisplay() {
    const currentDisplay = document.getElementById('res');
    currentDisplay.value = '';
    currentDisplay.removeAttribute('data-previous-value');
    currentDisplay.removeAttribute('data-current-operator');
}
