const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
   if (userInput === 'rock' || userInput === 'paper' || userInput ===   'scissors'|| userInput === 'bomb') {
  return userInput;
} else {
  console.log('Error!');
}
};

//console.log(getUserChoice('paper'))

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:	
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2: 
    return 'scissors';
    break;
  }
  return randomNumber
};

//console.log(getComputerChoice())

const determineWinner = (userChoice, getcomputerChoice) => {
  if (userChoice === getcomputerChoice) {
    console.log('The game ended in a draw');
  } else if (userChoice === 'rock') {
    if (getcomputerChoice === 'paper') {
      console.log('Computer won!');
    } else {
      console.log('User won!');
    }
  } else if (userChoice === 'paper') {
    if (getcomputerChoice === 'scissors') {
      console.log('Computer won!');
    } else {
      console.log('User won!');
    }
  } else if (userChoice === 'scissors') {
    if (getcomputerChoice === 'rock') {
      console.log('Computer won!');
    } else {
      console.log('User won!');
    }
  } else if (userChoice === 'bomb') {
    console.log('User won!')
  }
}

const playGame = () => {
  var userChoice = getUserChoice('bomb');
  var computerChoice = getComputerChoice();
  console.log(`User choose ${userChoice}. Comp choose ${computerChoice}.`)
  determineWinner(userChoice, computerChoice)
}
playGame()