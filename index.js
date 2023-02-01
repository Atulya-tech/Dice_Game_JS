let player1Score = 0
let player2Score = 0
let Player1Turn = true
const MainMessage = document.getElementById("message")
const player1scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const player1Dice = document.getElementById ("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
function BtnDisplayChange() {
     rollBtn.style.display = "none"
     resetBtn.style.display = "inline-block"
}
 rollBtn.addEventListener("click", function() {
     let randomNumber = Math.floor(Math.random()* 6 +(1))
     console.log(randomNumber)
     if (Player1Turn) {
         player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
         player1Dice.textContent = randomNumber
         player1Dice.classList.remove("active")
         player2Dice.classList.add("active")
         MainMessage.textContent = "Player 2 Turn" 
         
         
     } else {
         player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
         player2Dice.textContent = randomNumber
         player2Dice.classList.remove("active")
         player1Dice.classList.add("active")
         MainMessage.textContent = "Player 1 Turn"
         
     }      Player1Turn = !Player1Turn
     
     if (player1Score > 20) {
         MainMessage.textContent = "Player 1 has won!!!"
         BtnDisplayChange()
     } else if (player2Score > 20) {
         MainMessage.textContent = "Player 2 has won!!!"
         BtnDisplayChange()
        
     }
 })
 
function reset() {
 player1Score = 0
 player2Score = 0
 Player1Turn = true
 MainMessage.textContent = "Player 1 Turn"
 player1scoreboard.textContent = 0
 player2Scoreboard.textContent = 0
 player1Dice.textContent = " - "
 player2Dice.textContent= " - "
 resetBtn.style.display = "none"
 rollBtn.style.display = "inline-block"
 player1Dice.classList.add("active")
 player2Dice.classList.remove("active")
}
resetBtn.addEventListener("click", function() {
    reset()
})