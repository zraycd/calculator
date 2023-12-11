let firstNum
let operator
let secondNum

function add(a, b) {
    return a + b
}
function subract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            add(a, b)
            break;
        case '-':
            subract(a, b)
            break;
        case '*':
            multiply(a, b)
            break;
        case '/':
            divide(a, b)
            break;
    }
}
const display = document.querySelector('#display')
let currentDisplay = ''
document.querySelector('#nums').addEventListener('click', (event) => {
    currentDisplay += event.target.innerText
    display.innerText = currentDisplay
})
document.querySelector('#operators').addEventListener('click', (event) => {
    currentDisplay += ' ' + event.target.innerText + ' '
    display.innerText = currentDisplay
})

