let player = {
    name: "Eusebio",
    chips: 400
}
let cards = []
let sum = 0
let hasBlackjk = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    if (randomNum > 10) {
        return 10
    } else if (randomNum === 1) {
        return 11
    } else {
        return randomNum
    }
    
}

function startGame() {
    isAlive = true
    let firstCd = getRandomCard()
    let secondCd = getRandomCard()
    cards = [firstCd, secondCd]
    sum = firstCd + secondCd
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " 
    for (i = 0; i < cards.length; i +=1) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackjk = true
    } else {
        message = "You're out of the game!"
        isAlive = false  
    }
    messageEl.textContent = message
}

function newCard() {
    if (IsAlive === true && hasBlackjk === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}



