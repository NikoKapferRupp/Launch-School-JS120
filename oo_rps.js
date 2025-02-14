const readline = require('readline-sync');

function createScore() {
  return {
    humanWins: 0,
    computerWins: 0,
    ties: 0,
    humanWin() { this.humanWins += 1 },
    computerWin() { this.computerWins += 1 },
    tie() { this.ties += 1 },
    displayScore() {
      console.log(`You won ${this.humanWins} ${this.isSingularWin(this.humanWins)}.`);
      console.log(`The computer won ${this.computerWins} ${this.isSingularWin(this.computerWins)}.`);
      console.log(`You tied ${this.ties} ${this.isSingularWin(this.ties)}.`);   
    },

    isSingularWin(rightScore) {
      return rightScore === 1 ? 'time' : 'times';
    }

  };
}


function createPlayer() {
  return {
    move: null
  }
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {

    choose() {
      const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];

    }

  }
  return Object.assign(playerObject,computerObject);  

}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, scissors, lizard or spock:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors', 'lizard', 'spock'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    }    
  };

  return Object.assign(playerObject,humanObject);  
}

const RPSGame = {
  score: createScore(),
  human: createHuman(),
  computer: createComputer(),
  

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors, Lizard, Spock!');    
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Sciccors, Lizard, Spock. Goodbye!');
  },

  displayMoves() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    console.log((`You chose: ${humanMove}`));
    console.log((`The computer chose: ${computerMove}`));
  },

  assignWins() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    if (humanMove === computerMove) {
      this.score.tie();
      return
    }

    if ((humanMove === 'rock' && (computerMove === 'scissors' || computerMove === 'lizard' )) ||
    (humanMove === 'paper' && (computerMove === 'rock' || computerMove === 'spock')) ||
    (humanMove === 'scissors' && (computerMove === 'paper' || computerMove === 'lizard')) ||
    (humanMove === 'lizard' && (computerMove === 'spock' || computerMove === 'paper' )) ||
    (humanMove === 'spock' && (computerMove === 'scissors' || computerMove === 'rock' ))){
      this.score.humanWin()
    } else  {
      this.score.computerWin();
    }
    
  },

  displayWinner() {   
    if(this.score.humanWins > this.score.computerWins) {
      console.log('Congratulations! You won!');      
    } else {
      console.log('What a pity! You lost.');      
    }    
  },

  /*playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y' ? true : false;    
  },*/

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();  
      this.displayMoves(); 
      this.assignWins();         
      if (this.score.humanWins >= 5 || this.score.computerWins >= 5) break;
      this.score.displayScore();
      console.log("Next Round!")
    }
    this.displayWinner();
    this.displayGoodbyeMessage();
  }
}

RPSGame.play();