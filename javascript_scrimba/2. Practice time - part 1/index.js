
// name

let firstName = 'Arnold'
let lastName = 'Schwarzenneger'
let fullName = firstName + ' ' + lastName
console.log(fullName)


// concatenate 2 strings in a function

let greeting = 'Hi there'

function concatenate() {
  console.log(greeting + ', ' + firstName + '!')
}

concatenate()


// increment and decrement

let myPoints = 3

function add3Points() {
 myPoints += 3
}

function remove1Point() {
  myPoints -= 1
}

add3Points()
remove1Point()
add3Points()
remove1Point()
add3Points()
console.log(myPoints)


// strings and numbers

console.log("2" + 2) // string
console.log(11 + 7) // number
console.log(6 + "5") // string
console.log("My points: " + 5 + 9) // string
console.log(2 + 2) //  number
console.log("11" + "14") // string


// rendering an error message

function errorMsg() {
  let errorEl = document.getElementById('error')
  errorEl.textContent = "Something went wrong, please try again"
}


// calculator

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById('sum-el')

function add() {
  let sum = num1 + num2
  // sumEl.textContent = 'Sum: ' + sum
  sumEl.textContent = `Sum: ${num1 + num2}`
}

function subtract() {
  let sum = num1 - num2
  sumEl.textContent = 'Sum: ' + sum
}

function divide() {
  let sum = num1 / num2
  sumEl.textContent = 'Sum: ' + sum
}

function multiply() {
  let sum = num1 * num2
  sumEl.textContent = 'Sum: ' + sum
}


