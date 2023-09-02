const options = ['rock', 'paper', 'scissors'];

function computerChoice() {
    const map = new Map([[0, 'rock'], [1, 'paper'], [2, 'scissors']]) 
    const v = Math.floor(3*Math.random());
    return map.get(v);
}

function userChoice() {
    let input;
    do {
        input = prompt("Enter choice").toLowerCase();
    } while(!options.includes(input))
    return input;
}

function getWinner(p1, p2) {
    if (p1===p2) return 0;
    else if (p1 === 'rock') return p2 === 'paper' ? 2 : 1;
    else if (p1 === 'paper') return p2 === 'rock' ? 1 : 2;
    else if (p1 === 'scissors') return p2 === 'rock' ? 2: 1;
}

function game() {
    let player_score = 0;
    let comp_score = 0;
    for (let i = 0; i < 5; i++) {
        comp = computerChoice();
        player = userChoice();
        let winner = getWinner(comp, player);
        if (winner === 1){
            console.log('computer won match');
            comp_score++;
        } else if (winner === 2) {
            console.log('player won match');
            player_score++;
        } else console.log('match was a tie');
        console.log(`Comp score: ${comp_score}, player score: ${player_score}`);
    }
    if (player_score > comp_score) console.log('Player wins!');
    else if (player_score < comp_score) console.log('Computer wins!');
    else console.log('The game was a tie!');
}

game();