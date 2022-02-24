  const startSection = document.querySelector('.grid__start');
let hit = document.getElementById('hit');
let stand = document.getElementById('stand');
let score = document.getElementById('score');
let rules = document.querySelector('.rules');
const oppoHand = [document.querySelector('.grid__opponent')];
let currentlyPlaying = false;
let deck = ['<img src="https://i.ibb.co/r6N32sm/Club-2.png" class="2" alt="Club-2" border="0">',
'<img src="https://i.ibb.co/0f3P240/Club-A.png" class="A" alt="Club-A" border="0">',
'<img src="https://i.ibb.co/8P9dKYt/Diamonds-2.png" class="2" alt="Diamonds-2" border="0">',
'<img src="https://i.ibb.co/8mCVxdP/Diamonds-A.png" class="A" alt="Diamonds-A" border="0">',
'<img src="https://i.ibb.co/7QDjpbj/Hearts-2.png" class="2" alt="Hearts-2" border="0">',
'<img src="https://i.ibb.co/pPDVK78/Hearts-A.png" class="A" alt="Hearts-A" border="0">',
'<img src="https://i.ibb.co/rfV6Hkm/Spades-2.png" class="2" alt="Spades-2" border="0">',
'<img src="https://i.ibb.co/1rphd0Y/Spades-A.png" class="A" alt="Spades-A" border="0">',
'<img src="https://i.ibb.co/BK2hv3L/Club-3.png" class="3" alt="Club-3" border="0">',
'<img src="https://i.ibb.co/M21dsdV/Club-4.png" class="4" alt="Club-4" border="0">',
'<img src="https://i.ibb.co/9hML76P/Club-5.png" class="5" alt="Club-5" border="0">',
'<img src="https://i.ibb.co/MSgdDw0/Club-6.png" class="6" alt="Club-6" border="0">',
'<img src="https://i.ibb.co/6tD6S11/Club-7.png" class="7" alt="Club-7" border="0">',
'<img src="https://i.ibb.co/bRJw6y6/Club-8.png" class="8" alt="Club-8" border="0">',
'<img src="https://i.ibb.co/jDrc3WH/Club-9.png" class="9" alt="Club-9" border="0">',
'<img src="https://i.ibb.co/4TNQFSw/Club-10.png" class="10" alt="Club-10" border="0">',
'<img src="https://i.ibb.co/rt2hz15/Club-11.png" class="2" alt="Club-11" border="0">',
'<img src="https://i.ibb.co/hYQ7sqM/Club-12.png" class="3" alt="Club-12" border="0">',
'<img src="https://i.ibb.co/YbY628D/Club-13.png" class="4" alt="Club-13" border="0">',
'<img src="https://i.ibb.co/fn4mp0G/Diamonds-3.png" class="3" alt="Diamonds-3" border="0">',
'<img src="https://i.ibb.co/CVQ2Rfv/Diamonds-4.png" class="4" alt="Diamonds-4" border="0">',
'<img src="https://i.ibb.co/5ccXGWS/Diamonds-5.png" class="5" alt="Diamonds-5" border="0">',
'<img src="https://i.ibb.co/BNfk0s6/Diamonds-6.png" class="6" alt="Diamonds-6" border="0">',
'<img src="https://i.ibb.co/N9Js3Vx/Diamonds-7.png" class="7" alt="Diamonds-7" border="0">',
'<img src="https://i.ibb.co/3dYHbz2/Diamonds-8.png" class="8" alt="Diamonds-8" border="0">',
'<img src="https://i.ibb.co/q7Z7Rkm/Diamonds-9.png" class="9" alt="Diamonds-9" border="0">',
'<img src="https://i.ibb.co/6DZR5Mj/Diamonds-10.png" class="10" alt="Diamonds-10" border="0">',
'<img src="https://i.ibb.co/0JZ1ssm/Diamonds-11.png" class="2" alt="Diamonds-11" border="0">',
'<img src="https://i.ibb.co/9NMXmKT/Diamonds-12.png" class="3" alt="Diamonds-12" border="0">',
'<img src="https://i.ibb.co/9q8V6f1/Diamonds-13.png" class="4" alt="Diamonds-13" border="0">',
'<img src="https://i.ibb.co/W0pW824/Hearts-3.png" class="3" alt="Hearts-3" border="0">',
'<img src="https://i.ibb.co/WgJMxL3/Hearts-4.png" class="4" alt="Hearts-4" border="0">',
'<img src="https://i.ibb.co/SBJMYFd/Hearts-5.png" class="5" alt="Hearts-5" border="0">',
'<img src="https://i.ibb.co/rxqXVxr/Hearts-6.png" class="6" alt="Hearts-6" border="0">',
'<img src="https://i.ibb.co/5rZnJDK/Hearts-7.png" class="7" alt="Hearts-7" border="0">',
'<img src="https://i.ibb.co/VCTh99p/Hearts-8.png" class="8" alt="Hearts-8" border="0">',
'<img src="https://i.ibb.co/rQCNVJF/Hearts-9.png" class="9" alt="Hearts-9" border="0">',
'<img src="https://i.ibb.co/cTppqtD/Hearts-10.png" class="10" alt="Hearts-10" border="0">',
'<img src="https://i.ibb.co/XJPscWz/Hearts-11.png" class="2" alt="Hearts-11" border="0">',
'<img src="https://i.ibb.co/tzgP94p/Hearts-12.png" class="3" alt="Hearts-12" border="0">',
'<img src="https://i.ibb.co/Ttk5gfF/Hearts-13.png" class="4" alt="Hearts-13" border="0">',
'<img src="https://i.ibb.co/vxcJc13/Spades-3.png" class="3" alt="Spades-3" border="0">',
'<img src="https://i.ibb.co/k3Z1s81/Spades-4.png" class="4" alt="Spades-4" border="0">',
'<img src="https://i.ibb.co/yWkyNxM/Spades-5.png" class="5" alt="Spades-5" border="0">',
'<img src="https://i.ibb.co/Y8QZCfQ/Spades-6.png" class="6" alt="Spades-6" border="0">',
'<img src="https://i.ibb.co/TYgm3Jm/Spades-7.png" class="7" alt="Spades-7" border="0">',
'<img src="https://i.ibb.co/PzLkh41/Spades-8.png" class="8" alt="Spades-8" border="0">',
'<img src="https://i.ibb.co/LYFQw4N/Spades-9.png" class="9" alt="Spades-9" border="0">',
'<img src="https://i.ibb.co/N1mKDbV/Spades-10.png" class="10" alt="Spades-10" border="0">',
'<img src="https://i.ibb.co/mXwngwL/Spades-11.png" class="2" alt="Spades-11" border="0">',
'<img src="https://i.ibb.co/9vRySfY/Spades-12.png" class="3" alt="Spades-12" border="0">',
'<img src="https://i.ibb.co/G06Sb27/Spades-13.png" class="4" alt="Spades-13" border="0">'];
let usedCards = [];


let place = [document.getElementById('p1'), document.getElementById('p2'),
document.getElementById('p3'), document.getElementById('p4'), document.getElementById('p5'),
document.getElementById('p6'), document.getElementById('p7'), document.getElementById('p8'),
  document.getElementById('p9')];

let cardSelector = () => {
  let randomCard = Math.floor(Math.random() * deck.length);
  if (!usedCards.some(an => an === deck[randomCard])) {
    usedCards.push(deck[randomCard]);
    return deck[randomCard];
  } else {return cardSelector()};
}

let scoreCalc = () => {
  let totalScore = 0;
  let nums = [place.filter(element => element.innerHTML.includes(`class="2"`)),
    place.filter(element => element.innerHTML.includes(`class="3"`)),
    place.filter(element => element.innerHTML.includes(`class="4"`)),
    place.filter(element => element.innerHTML.includes(`class="5"`)),
    place.filter(element => element.innerHTML.includes(`class="6"`)),
    place.filter(element => element.innerHTML.includes(`class="7"`)),
    place.filter(element => element.innerHTML.includes(`class="8"`)),
    place.filter(element => element.innerHTML.includes(`class="9"`)),
    place.filter(element => element.innerHTML.includes(`class="10"`))];
  let A = place.filter(element => element.innerHTML.includes(`class="A"`));
  for (let j = 0; j < nums.length; j++) {
    totalScore += nums[j].length * (j + 2);
  }
  if (A.length === 1){
    if (totalScore <= 10) {
      totalScore += A.length * 11;
    } else {totalScore += A.length};
  } else if (A.length > 1) {
      if (totalScore <= 10) {
        totalScore += A.length + 10;
      } else {totalScore += A.length}
  }
  return totalScore;
};

startSection.addEventListener ('click', function() {
  if(!currentlyPlaying) {
  oppoHand[0].innerHTML = '<img src="https://i.ibb.co/wwQcr7y/back-blue-2-large-1024x1024.png">' + cardSelector() + cardSelector();
  setTimeout(() => {startRound()}, 10);
  startSection.style.visibility = 'hidden';
  } else {endRound()}
});

var nodes = oppoHand[0].childNodes;
const startRound = () => {
  currentlyPlaying = true;
  document.querySelector('.grid__opponent img:nth-child(2)').style.display = 'none';
  place[0].innerHTML = cardSelector();
  place[1].innerHTML = cardSelector();
  place[0].style.display = 'inline-block';
  place[1].style.display = 'inline-block';
  place[0].style.bottom = '0';
  place[1].style.bottom = '0';
  place[0].style.left = '0';
  place[1].style.left = '0';
  score.innerHTML = "Score: " + scoreCalc();
  for(var i=0; i<nodes.length; i++) {
    if (nodes[i].nodeName.toLowerCase() == 'img') {
         nodes[i].style.bottom = '0';
         nodes[i].style.left = '0';
     };
  };
};

const endRound = () => {
  currentlyPlaying = false;
  oppScr();
  winner();
  place.forEach(element => element.innerHTML = '')
  place.forEach(element => element.style = 'none')
  i = 1;
  usedCards.length = 0;
    score.innerHTML = "Score: ";
  startSection.style.visibility = 'visible';
  totalScore = 0;
  score.innerHTML = "Score: ";
  oppoHand[0].innerHTML = '';
}


let i = 1;       //итератор позиции крайней выпавшей карты
hit.onmousedown = function(){
  if (currentlyPlaying){
    place[2].style.display = 'inline-block';
    do {
      i += 1;
      place[i].innerHTML = cardSelector();
      place[i].style.bottom = '0'
    } while (i === place.length);
    if (i < 5) {place[i].style.left = '0'}
    else if (i >= 5) {place[i].style.right = '0'}
  }
  score.innerHTML = "Score: " + scoreCalc();
};

hit.onclick = function(){
  if (scoreCalc() > 21) {
    // gameOver('lose')
    endRound();
    }                             //завершает игру при переборе
};

let oppScr = () => {
  let oppScore = 0;
    let nums = [oppoHand[0].innerHTML.match(/class="2"/g),
    oppoHand[0].innerHTML.match(/class="3"/g),
    oppoHand[0].innerHTML.match(/class="4"/g),
    oppoHand[0].innerHTML.match(/class="5"/g),
    oppoHand[0].innerHTML.match(/class="6"/g),
    oppoHand[0].innerHTML.match(/class="7"/g),
    oppoHand[0].innerHTML.match(/class="8"/g),
    oppoHand[0].innerHTML.match(/class="9"/g),
    oppoHand[0].innerHTML.match(/class="10"/g)]
  let Ace = oppoHand[0].innerHTML.match(/class="A"/);
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== null) {
      oppScore += nums[j].length * (j + 2);
    }
  }
  if (Ace !== null){
    if (oppScore <= 10) {
      oppScore += Ace.length * 11;
    } else {oppScore += Ace.length};
  }
  return oppScore;
};

const winner = function(){
  if (scoreCalc() > 21) {
    alert('Game over! Play again?');
  } else if (scoreCalc() === 21){
    alert('You win! Play again?');
  } else if (oppScr() > 21) {
    alert('You win! Play again?');
  } else if (oppScr() === 21) {
    alert('Game over! Play again?');
  } else if (scoreCalc() < 21 && oppScr() < 21) {
    if (scoreCalc() === oppScr()) {
      alert('Game ended in a draw!')
    } else if (scoreCalc() < oppScr()) {
      alert('Game over! Play again?');
    } else if (scoreCalc() > oppScr()) {
      alert('You win! Play again?');
    }
  }
};

pull = () => {
  for(var i=3; i<nodes.length; i++) {
    if (nodes[i].nodeName.toLowerCase() == 'img') {
         nodes[i].style.bottom = '0';
         nodes[i].style.left = '0';
     }
   }
}

function countdown(seconds) {
    var interval = setInterval(function() {
        if (seconds < 0) {clearInterval(interval)}; //break the interval
        seconds--;
        if (oppScr() <= scoreCalc()) {
    oppoHand[0].innerHTML += cardSelector();
    oppScr();
    setTimeout(() => {pull()}, 10);   //animation
  }}, 700); //time in milliseconds to wait
  }

stand.onclick = function(){
  oppScr();
  document.querySelector('.grid__opponent img:first-child').style.display = 'none';
  document.querySelector('.grid__opponent img:nth-child(2)').style.display = 'inline-block';
  if (scoreCalc() === 21){
    endRound()
  } else {countdown(3)}
  currentlyPlaying = false;
  setTimeout(() => {startSection.style.visibility = 'visible'}, 3500);
  totalScore = 0;
  setTimeout(() => {endRound()}, 3500);
}
