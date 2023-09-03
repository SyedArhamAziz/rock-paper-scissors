const options = ['rock', 'paper', 'scissors'];
const btns = document.querySelectorAll('button');
const matchwinner = document.querySelector('#matchwinner');
const scores = document.querySelector('#scores');
const winnerm = document.querySelector('#winner-message');

let rounds = 0;
let player_score = 0;
let comp_score = 0;

btns.forEach((button) => button.addEventListener('click', playRound));

function computerChoice() {
    const map = new Map([[0, 'rock'], [1, 'paper'], [2, 'scissors']]) 
    const v = Math.floor(3*Math.random());
    return map.get(v);
}

function getWinner(p1, p2) {
    if (p1===p2) return 0;
    else if (p1 === 'rock') return p2 === 'paper' ? 2 : 1;
    else if (p1 === 'paper') return p2 === 'rock' ? 1 : 2;
    else if (p1 === 'scissors') return p2 === 'rock' ? 2: 1;
}

function playRound() {
    if (rounds >= 5) return;
    let comp = computerChoice();
    let player = this.id;
    let winner = getWinner(comp, player);
    if (winner === 1){
        console.log('computer won match');
        comp_score++;
    } else if (winner === 2) {
        console.log('player won match');
        player_score++;
    } else console.log('match was a tie');
    updateMatchResult(winner);
    updateScores();
    if (rounds == 4) {
        updateWinner();
    }
    console.log(`Comp score: ${comp_score}, player score: ${player_score}`);
    rounds++;
}

function updateMatchResult(result) {
    let winner;
    if (result === 1) winner = 'computer';
    else if (result ===2) winner = 'player';
    else winner = 'tie'; 

    matchwinner.textContent = `Match winner: ${winner}`
}

function updateScores() {
    scores.textContent = `Player score: ${player_score}, Computer score: ${comp_score}`;
}

function updateWinner() {
    let winner;
    if (player_score > comp_score) winner = 'player';
    else if (player_score < comp_score) winner = 'computer';
    else winner = 'tie';
    winnerm.textContent = `Winner: ${winner}`;
    winnerm.style.visibility = 'visible';
}
