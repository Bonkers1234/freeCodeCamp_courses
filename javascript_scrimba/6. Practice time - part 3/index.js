
// SETTING THE STAGE
const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes


let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function singleArray(arr) {
  for(let i = 0; i < arr.length; i++) [
    console.log(arr[i])
  ]
}

singleArray(myCourses)


// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

let data = [
  {
      player: "Jane",
      score: 52
  }, 
  {
      player: "Mark",
      score: 41
  }
]

const logBtn = document.getElementById('log-btn')

logBtn.addEventListener('click', () => {
  console.log(`${data[0].player} score is ${data[0].score}`)
})


// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
    let string = ''
    for(let i = 0; i < arr.length; i++) {
      string += `${i + 1 < arr.length ? `${arr[i]}, ` : arr[i]}`
      // string += arr[i]
      // if(i + 1 < arr.length) {
      //   string += ', '
      // }
    }
    console.log(`The ${arr.length} ${desc} ${arr.length === 1 ? 'is' : 'are'} ${string}`)
}

const sent1 = 'best colors'
const arr1 = ['blue', 'red', 'yellow', 'green']

const sent2 = 'cutest animal'
const arr2 = ['cat']

generateSentence(sent1, arr1) // multiple items
generateSentence(sent2, arr2) // single item


// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
  "images/hip1.jpg",
  "images/hip2.jpg",
  "images/hip3.jpg"
]

const container = document.getElementById('container')

function renderImg(arr) {
  let elements = ''
  for(let i = 0; i < arr.length; i++) {
    elements += `<img class="team-img" src="${arr[i]}">`
  }
  container.innerHTML = elements
}

renderImg(imgs)