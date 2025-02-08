
let player = {
  name: 'Player',
  chips: 200
}

let cards = []
let hasBlackJack = false
let isAlive = false
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')
let card
let playerEl = document.querySelector('#player-el')

playerEl.textContent = player.name + ': ' + '$' + player.chips 

function startGame() {
  isAlive = true
  hasBlackJack = false
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = cards[0] + cards[1]
  renderGame()
}

function getRandomCard() {
  let number = Math.floor(Math.random() * 13) + 1
  if(number === 1) {
    return 11
  } else if(number > 10) {
    return 10
  } else {
    return number
  }
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

  cardsEl.textContent = 'Cards: '

  for(let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' '
  }
}

function newCard() {
  if(isAlive && !hasBlackJack) {
    console.log("Drawing a new card from the deck!")
    card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}










