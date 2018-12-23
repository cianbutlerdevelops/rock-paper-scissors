const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
        if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        return userInput;
          } else {
        console.log('Pick A Valid Selection');
      }
  };
  
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    
    switch(randomNumber){
      case 0:
          return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';  
      }
    
  };
  
  const determineWinner = (userChoice, computerChoice) => { 
    if(userChoice === 'bomb'){
      return 'You destoyed your opponent!'
  }
    if(userChoice === computerChoice){
      return 'game is a tie';
      }
    
      if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
          return 'Computer Wins!';
        }
        else{
          return 'You Win!';
        }
      }
    
     if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'Computer Wins!';
          }
      else{
        return 'You Win!';
          }
      }
    
    if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'Computer Wins!';
          }
      else{
        return 'You Win!';
          }
      }
  
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('Your Choice is : ' + userChoice);
    console.log('The Computer choice is : ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  
   
  
  playGame();
          