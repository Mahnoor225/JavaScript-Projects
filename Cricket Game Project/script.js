function playGame(userChoice) {
    // Generate random computer choice
    let randomnumber = Math.random() * 3;
    let computerchoice;
    if (randomnumber > 0 && randomnumber <= 1) {
        computerchoice = 'Bat';
    } else if (randomnumber > 1 && randomnumber <= 2) {
        computerchoice = 'Ball';
    } else {
        computerchoice = 'Stump';
    }

    // Create message based on choices
    const usermsg = `You have chosen ${userChoice}`;
    const computerchoicemsg = `Computer choice is ${computerchoice}`;
    let resultmsg;

    // Determine the result
    if (userChoice === computerchoice) {
        resultmsg = 'It\'s a tie!';
    } else if (
        (userChoice === 'Ball' && computerchoice === 'Stump') ||
        (userChoice === 'Bat' && computerchoice === 'Ball') ||
        (userChoice === 'Stump' && computerchoice === 'Bat')
    ) {
        resultmsg = 'You won!';
    } else {
        resultmsg = 'Computer has won!';
    }

    // Show the result
    alert(`${usermsg} ${computerchoicemsg} and ${resultmsg}`);
}
