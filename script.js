let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

function pickMove() {
    const randomMove = Math.random()
    let computerMove = '';
    if (randomMove >= 0 && randomMove <= 1 / 3) {
        computerMove = 'Rock';
    }
    else if (randomMove >= 1 / 3 && randomMove <= 2 / 3) {
        computerMove = 'Paper';
    }
    else if (randomMove >= 2 / 3 && randomMove <= 1) {
        computerMove = 'Scissors';
    }
    return computerMove;

}

function playGame(playerMove) {
    const computerMove = pickMove();
    let result = '';

    if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie';
        }
        else if (computerMove === 'Paper') {
            result = 'You Lose';
        }
        else if (computerMove === 'Scissors') {
            result = 'You Win';
        }
    }
    else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You Win';
        }
        else if (computerMove === 'Paper') {
            result = 'Tie';
        }
        else if (computerMove === 'Scissors') {
            result = 'You Lose';
        }
    }
    else if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You Lose';
        }
        else if (computerMove === 'Paper') {
            result = 'You Win';
        }
        else if (computerMove === 'Scissors') {
            result = 'Tie';
        }
    }

    if (result === 'You Win') {
        score.wins += 1;
    }
    else if (result === 'You Lose') {
        score.losses += 1;
    }
    else if (result === 'Tie') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score))


    document.getElementById('myMove').innerHTML = `You Picked: <img src="Images/${playerMove}move.jpg">`;
    document.getElementById('computerMove').innerHTML = `Computer Picked: <img src="./Images/${computerMove}move.jpg">`;
    document.getElementById('summation').innerHTML = result;
    document.getElementById('wins').innerHTML = score.wins;
    document.getElementById('losses').innerHTML = score.losses;
    document.getElementById('ties').innerHTML = score.ties;
}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    document.getElementById('myMove').innerHTML = '';
    document.getElementById('computerMove').innerHTML = '';
    document.getElementById('wins').innerHTML = score.wins;
    document.getElementById('losses').innerHTML = score.losses;
    document.getElementById('ties').innerHTML = score.ties;
    document.getElementById('summation').innerHTML = '';
}
