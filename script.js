const options = ['rock', 'paper', 'scissors'];

function computerChoice() {
    const map = new Map([[0, 'rock'], [1, 'paper'], [2, 'scissors']]) 
    const v = Math.floor(3*Math.random());
    return map.get(v);
}

function userChoice() {
    do {
        input = prompt("Enter choice").toLowerCase();
    } while(!options.includes(input))
    return input;
}
console.log(computerChoice());