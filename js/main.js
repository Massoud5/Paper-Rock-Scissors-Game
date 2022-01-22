let robotArr = [   
    document.querySelector(".robot-paper"), 
    document.querySelector(".robot-rock"), 
    document.querySelector(".robot-scissors")
]

const playerId = document.getElementById("player-score")
const robotId = document.getElementById("robot-score")
let playerScore = 0
let robotScore = 0


function renderHand1() {
    
    let randomNum = Math.floor(Math.random() * robotArr.length)
    resultEl.style.visibility = "hidden"
    
    for (i = 0; i < robotArr.length; i++){
        robotArr[i].classList.remove("show")
        robotArr[randomNum].classList.add("show");
    }
    

    if(randomNum == 0){
        playerScore += 0.5
        robotScore += 0.5
    } 
    else if(randomNum == 1){
        playerScore += 1
        robotScore += 0
    }
    else if(randomNum == 2){
        playerScore += 0
        robotScore += 1
    }

    playerId.textContent = ` Player's score: ${playerScore}`
    robotId.textContent = ` Robot's score: ${robotScore}`
    result()
}

function renderHand2() {
    
    let randomNum = Math.floor(Math.random() * robotArr.length)
    resultEl.style.visibility = "hidden"

    for (i = 0; i < robotArr.length; i++){
        robotArr[i].classList.remove("show")
        robotArr[randomNum].classList.add("show");
    }
    
    if(randomNum == 0){
        playerScore += 0
        robotScore += 1
    } 
    else if(randomNum == 1){
        playerScore += 0.5
        robotScore += 0.5
    }
    else if(randomNum == 2){
        playerScore += 1
        robotScore += 0
    }

    playerId.textContent = ` Player's score: ${playerScore}`
    robotId.textContent = ` Robot's score: ${robotScore}`
    result()    
}

function renderHand3() {
    
    let randomNum = Math.floor(Math.random() * robotArr.length)
    resultEl.style.visibility = "hidden"

    for (i = 0; i < robotArr.length; i++){
        robotArr[i].classList.remove("show")
        robotArr[randomNum].classList.add("show");
    }
    
    if(randomNum == 0){
        playerScore += 0
        robotScore += 1
    } 
    else if(randomNum == 1){
        playerScore += 0
        robotScore += 1
    }
    else if(randomNum == 2){
        playerScore += 0.5
        robotScore += 0.5
    }

    playerId.textContent = ` Player's score: ${playerScore}`
    robotId.textContent = ` Robot's score: ${robotScore}`
    
    result ()
}