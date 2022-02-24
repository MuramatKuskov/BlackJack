  const startSection = document.getElementById('phand');
let hit = document.getElementById('hit');
let stand = document.getElementById('stand');
let score = document.getElementById('score');
let rules = document.querySelector('.rules');
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

/*rules.onclick = function(){
  if (document.querySelector('.rules__ul').style.display === 'none') {
    document.querySelector('.rules__el1').style.textAlign = 'right';
    document.querySelector('.rules__ul').style.display = 'block';
    document.querySelector('.rules').style.borderRadius = '35% 10% 50% 10%';
  } else {
    document.querySelector('.rules__ul').style.display = 'none';
    document.querySelector('.rules').style.borderRadius = '35% 10% 50% 10%';
  }
};*/

let cardSelector = () => {
  let randomCard = Math.floor(Math.random() * deck.length);
  if (!usedCards.some(an => an === deck[randomCard])) {
    usedCards.push(deck[randomCard]);
    return deck[randomCard];
  } else {return cardSelector()};
}


let scoreCalc = () => {
  let totalScore = 0;
  let two = place.filter(element => element.innerHTML.includes(`class="2"`));
  let three = place.filter(element => element.innerHTML.includes(`class="3"`))
  let four = place.filter(element => element.innerHTML.includes(`class="4"`))
  let five = place.filter(element => element.innerHTML.includes(`class="5"`))
  let six = place.filter(element => element.innerHTML.includes(`class="6"`))
  let seven = place.filter(element => element.innerHTML.includes(`class="7"`))
  let eight = place.filter(element => element.innerHTML.includes(`class="8"`))
  let nine = place.filter(element => element.innerHTML.includes(`class="9"`))
  let ten = place.filter(element => element.innerHTML.includes(`class="10"`))
  let A = place.filter(element => element.innerHTML.includes(`class="A"`))
  if (two.length > 0){
    totalScore += two.length * 2;
  }
  if (three.length > 0){
    totalScore += three.length * 3;
  }
  if (four.length > 0){
    totalScore += four.length * 4;
  }
  if (five.length > 0){
    totalScore += five.length * 5;
  }
  if (six.length > 0){
    totalScore += six.length * 6;
  }
  if (seven.length > 0){
    totalScore += seven.length * 7;
  }
  if (eight.length > 0){
    totalScore += eight.length * 8;
  }
  if (nine.length > 0){
    totalScore += nine.length * 9;
  }
  if (ten.length > 0){
    totalScore += ten.length * 10;
  }
  if (A.length > 0){
    if (totalScore <= 10) {
      totalScore += A.length * 11;
    } else {totalScore += A.length};
  }
  return totalScore;
};



startSection.addEventListener ('click', function() {
  if(!currentlyPlaying) {
  startRound();
  score.innerHTML = "Score: " + scoreCalc();
  startSection.style.visibility = 'hidden';
  // document.getElementById('p1').style.animation = 'card 15s ease 1 normal 1s backwards';
  }
});

const startRound = () => {
  currentlyPlaying = true;
  place[0].innerHTML = cardSelector();
  place[1].innerHTML = cardSelector();
  place[0].style.transform = 'translateY(300px)'
  place[1].style.transform = 'translateY(300px)'
}

const endRound = () => {
  currentlyPlaying = false;
  place.forEach(element => element.innerHTML = '')
  place.forEach(element => element.style.transform = 'none')
  i = 1;
  usedCards.length = 0;
    score.innerHTML = "Score: ";
  startSection.style.visibility = 'visible';
  totalScore = 0;
  oppHand()
}


let i = 1;
hit.onmousedown = function(){
    if (currentlyPlaying){
    do {
      i += 1;
      place[i].innerHTML = cardSelector();
      place[i].style.transform = 'translateY(300px)'        //------------//
    } while (i === place.length);
  }
  score.innerHTML = "Score: " + scoreCalc();
}
hit.onclick = function(){
  if (scoreCalc() > 21) {overcharge()}
};

const overcharge = () => {
      gameOver('lose')
    endRound();
  }


let oppHand = () => {
  let scr = Math.floor(Math.random() * (30-15) + 15);
  return scr;
};

stand.onclick = function(){
  if (scoreCalc() === 21){
    gameOver('win')
  }/* else if (scoreCalc() > 21) {
    gameOver('lose')
  }*/ else if (oppHand() > 21) {
    gameOver('win')
  } else if (oppHand() === 21) {
    gameOver('lose')
  } else if (scoreCalc() < 21 && oppHand() < 21) {
    if (scoreCalc() === oppHand()) {
      alert('Game ended in a draw!')
    } else if (scoreCalc() < oppHand()) {
      gameOver('lose')
    } else if (scoreCalc() > oppHand()) {
      gameOver('win')
    }
  }
  endRound();
  score.innerHTML = "Score: ";
  startSection.style.visibility = 'visible';
  totalScore = 0;
  oppHand()
}

  const gameOver = status => {
  if(status === 'win') {
    alert('You win! Play again?');
  } else {
    alert('Game over! Play again?');
  }
  currentlyPlaying = false;
};
