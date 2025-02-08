
let person = {
  name: 'Arnold',
  age: 45,
  country: 'Austria'
}

function logData() {
  return person.name + ' is ' + person.age + ' years old and lives in ' + person.country
}

console.log(logData())

//////////////////////////////////////
let age = 100

if(age < 6) {
  console.log('Free')
} else if(age < 18) {
  console.log('Child discount')
} else if(age < 27) {
  console.log('Student discount')
} else if(age < 67) {
  console.log('Full price')
} else {
  console.log('Senior citizen discount')
}

////////////////////////////////////
let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

for(let i = 0; i < largeCountries.length; i++) {
  console.log(largeCountries[i])
}

/////////////////////////////////////
let largerCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

largerCountries.shift()
largerCountries.unshift('China')
largerCountries.pop()
largerCountries.push('Pakistan')
console.log(largerCountries)

////////////////////////////////////
let dayOfMonth = 13
let weekday = "Friday"

if(dayOfMonth === 13 && weekday === 'Friday') {
  console.log('😱')
}

///////////////////////////////////
let hands = ["rock", "paper", "scissor"]

function rps() {
  return hands[Math.floor(Math.random() * 3)]
}

console.log(rps())

//////////////////////////////////
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function place() {
  for(let i = 0; i < fruit.length; i++) {
    if(fruit[i] === '🍎') {
      appleShelf.textContent += fruit[i] + " "
      console.log('🍎')
    } else {
      orangeShelf.textContent += fruit[i] + " "
      console.log('🍊')
    }
  }
}

place()
