alert(` 

        The first one who reach the score of 10, will win.`)
        
const resultEl = document.getElementById("resultP")

function result() {
    if (playerScore >= 10) {
        resultEl.textContent = "You Win!"
        resultEl.style.visibility = "visible"
        resultEl.style.color = "lightgreen"
        playerScore = 0
        robotScore = 0
    }
    else if (robotScore >= 10) {
        resultEl.textContent = "You Losed!"
        resultEl.style.visibility = "visible"
        resultEl.style.color = "red"
        playerScore = 0
        robotScore = 0
    }
    else if (playerScore == 10 & robotScore == 10) {
        resultEl.textContent = "Equality!"
        resultEl.style.visibility = "visible"
        playerScore = 0
        robotScore = 0
    }
}