"use strict";

// NEW

let scoreNum, currentNum, active, player;
const player1Score = document.getElementById('score--0');
const player2Score = document.getElementById('score--1');
const player1Current = document.getElementById('current--0');
const player2Current = document.getElementById('current--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

 const diceImg = document.querySelector('.dice');
 const newGame = document.querySelector('.btn--new');
 const rollDice = document.querySelector('.btn--roll');
 const holdDice = document.querySelector('.btn--hold');
 

// Initialization

const reset = ()=>{
  
  scoreNum = [0,0];
  currentNum = 0;
  active = 0;
  player = true;


  // hiding dice


  diceImg.classList.add('hidden');

  // initializing score and current score;

  player1Score.textContent = 0;
  player2Score.textContent = 0;
  player1Current.textContent = 0;
  player2Current.textContent = 0;

  // remove winning class
   player1.classList.remove('player--winner');
   player2.classList.remove('player--winner');

  // remove active class
  player1.classList.add('player--active');
  player2.classList.remove('player--active');

  
  
};

// switch player

const changePlayer=()=>{
  currentNum = 0;
  document.getElementById(`current--${active}`).textContent = currentNum;
  if (active ===0){
    active = 1;
  }else{
    active = 0;
  }
  
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
  

};

 // dices rolling 
  
 const rollDiceFx=()=>{
  

  if (player){
    let random = Math.trunc(Math.random()*6)+1;
    diceImg.classList.remove('hidden');
      diceImg.src= `./image/dice-${random}.png`
    if (random !==1){
      currentNum = currentNum + random;
      document.getElementById(`current--${active}`).textContent = currentNum;
  }else{
    
    changePlayer();
  }

}
 };


//  hold

const hold=()=>{
  if (player){
  scoreNum[active] = scoreNum[active]+currentNum;
  document.getElementById(`score--${active}`).textContent = scoreNum[active];
  document.getElementById(`current--${active}`).textContent = 0;
  if (scoreNum[active] >= 100){
    player = false;
    document.querySelector(`.player--${active}`).classList.add('player--winner');
    document.querySelector(`.player--${active}`).classList.remove('player--active');
    diceImg.classList.add('hidden');

  }else{
    changePlayer();

  }

}

};



rollDice.addEventListener("click", rollDiceFx);
holdDice.addEventListener('click', hold);






newGame.addEventListener("click", reset);
window.addEventListener('load',reset);


