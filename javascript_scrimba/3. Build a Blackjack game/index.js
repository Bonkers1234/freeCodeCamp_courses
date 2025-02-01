
let firstCard = 10
let secondCard = 11
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')
let card


function startGame() {
  renderGame()
}

function renderGame() {
  if(sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if(sum === 21) {
    hasBlackJack = true
    message = "You've got Blackjack!"
  } else {
    isAlive = false
    message = "You're out of the game!"
  }

  messageEl.textContent = message
  sumEl.textContent = 'Sum: ' + sum
  cardsEl.textContent = 'Cards: ' + cards[0] + ' ' + cards[1]
}

function newCard() {
  console.log("Drawing a new card from the deck!")
  card = 2
  sum += card
  renderGame()
}










