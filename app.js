
let userPoint = 0;
let computerPoint = 0;
let result
let round = 5;
let roundCounter = 0
let showDetails;

let rock = "rock";
let paper = "paper";
let scissors = "scissors";
const comArr = [rock, paper, scissors]


let userInputs = document.getElementsByClassName("user_input")
for (let i = 0; i<userInputs.length; i++) {

  userInputs[i].addEventListener('click', () =>  playGame(userInputs[i].id))
}


function updatePointCounter(u, c, t) {
  if(t) {
    document.getElementById("user_points").innerText = u
  } else {

    document.getElementById("com_points").innerText = c
  }
}

function upDateRound (r) {
  document.getElementById("rount_counter").innerText = r
}

function updateResult (result) {
  document.getElementById('result').innerText = result
}

function updateDeatils (d) {
  document.getElementById("show_details").innerText = d
}

function updateDisplayDom (showDetails, result, userPoint, computerPoint) {
  document.getElementById("game_section").classList.add("dn")
  let elem = document.getElementById("try_section")
  elem.innerHTML = `<div class="card">
  <h1>Game Over</h1>
  <div id="show_details">${showDetails}</div>
  <div class="show_result"><span id="result">${result}</span></div>
  <div class="point">
  <div class="palyer_points">
  User Points: <span id="user_points">${userPoint}</span>
  </div>
  <div class="palyer_points">
  Computer Points: <span id="com_points">${computerPoint}</span>
  </div>
  </div>
  <button class="reset mt-20" id="reset" onclick="tryAgain()">Try Again</button>
  </div>`;
  
  elem.classList.add('df')
  
}


// document.getElementById("rock").addEventListener('click', () => myfunc(rock))
// document.getElementById("paper").addEventListener('click', () => myfunc(paper))
// document.getElementById("scissors").addEventListener('click', () => myfunc(scissors))


function playGame (userInput) {
  if(roundCounter<round) {
    let comInput = comArr[Math.floor(Math.random() * 3)]
    
    // setting showDetails
    if((userInput !== "" || userInput !== null) && (comInput !== "" || comInput !== null)) {
      showDetails = `Your Guess is "${userInput}" And Computer Guess is "${comInput}"`
    }
    

  if(userInput === comInput) {
      result = "It's a tie"
  } else if((userInput === rock && comInput=== scissors)||(userInput === paper && comInput === rock)|| (userInput === scissors && comInput === paper)) {
    roundCounter +=1
    
    userPoint += 1
    updatePointCounter(userPoint, computerPoint, true)
      result = "You win The Round!!"
  } else {
    roundCounter +=1
    
    computerPoint += 1
    updatePointCounter(userPoint, computerPoint, false)
   
      result = "You Loose The Round !!"
  }
  
  
  upDateRound(roundCounter)
  if(roundCounter===round) {

    
    if(userPoint>computerPoint) {
      result = "Congratulation You win the game!"
    } else {
      result = "Opps You loose the game!"
    }
    
    updateDisplayDom(showDetails, result, userPoint, computerPoint)
  } else {
    updateDeatils (showDetails)
    updateResult(result)
    
  }
}
}


function tryAgain() {
  location.reload();
}


