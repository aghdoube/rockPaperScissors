


const pMove = process.argv[2]; 


const moves = ['rock', 'paper', 'scissors']; 

const cMove = moves[Math.floor(Math.random() * moves.length)]; 


function game(player, computer) {
    if (player === computer) {
        return "It's a draw!"; 
    }

    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')
    ) {
        return "You win!"; 
    } else {
        return "You lose!"; 
    }
}

if (moves.includes(pMove)) { 
    console.log(`You chose ${pMove}. Computer chose ${cMove}. ${game(pMove, cMove)}`);
} else {
    console.log("Invalid move. Please choose rock, paper, or scissors."); 
}