let randomNumber=parseInt(Math.random() * 100 + 1);

const submit = document.getElementById('subt');
const userInput=document.getElementById('guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrhigh=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p =document.createElement('p');

let prevGuess=[];
let numGuess=1;
let playGame=true;

if(playGame){
  submit.addEventListener('click'  , function(e){
  e.preventDefault();
  let guess= parseInt(userInput.value);
  console.log(guess);
  validateGuess(guess);
  })
}

function validateGuess(guess){
 if(isNaN(guess) || guess<1 || guess>100){
  alert('Please enter the valid number boy');
 }
 else {
   prevGuess.push(guess);
   if(numGuess>10){
   displayGuess(guess);
   displayMessage(`Game is Over the number was ${randomNumber}`);
   endGame();
   }
   else{
    displayGuess(guess);
     checkGuess(guess);
   }
 }
}

function checkGuess(guess){
 if(guess === randomNumber){
    displayMessage(`You guess it right ! Hurray `);
    endGame();
 }
 else if(guess > randomNumber){
  displayMessage(`Your number is too high buddy`);

 }
 else if(guess < randomNumber){
  displayMessage(`Your number is too low`);
 }
}

function displayGuess(guess){
 userInput.value='';
 guessSlot.innerHTML +=`${guess} , `;
 numGuess++;
 remaining.innerHTML=`${11-numGuess}`;
}

function displayMessage(message){
 lowOrhigh.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
 userInput.value='';
 userInput.setAttribute('disabled' , '');
 p.classList.add('button');
 p.innerHTML=`<h2 id="newGame">Start a new Game</h2>`
 startOver.appendChild(p);
 playGame=false;
 newGame();
}

function newGame(){
 const newGameButton=document.querySelector('#newGame');
  newGameButton.addEventListener('click'  , function(e){
   randomNumber=parseInt(Math.random() * 100 + 1);
   prevGuess=[];
   console.log(prevGuess);
   numGuess=1;
   guessSlot.innerHTML=``;
   remaining.innerHTML=`${11-numGuess}`;
   userInput.removeAttribute('disabled');
   startOver.removeChild(p);
   playGame=true;
  })
}
