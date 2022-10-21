let firstCard = Math.floor(Math.random()*(15 - 1)+1)
let secondCard = Math.floor(Math.random()*(15 - 1)+1)
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")
function startgame() {
    rendergame()
}
function rendergame() {
    cardEl.textContent = "cards: " + firstCard + " , " + secondCard 
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message 
}

function newcard() {
    let card = Math.floor(Math.random()*(15 - 1)+1)
    cardEl.textContent += " , " + card
    sum += card
    game()
}
function game() {

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message 
}