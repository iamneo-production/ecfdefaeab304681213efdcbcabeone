// Initial game state
const board = document.getElementById('board');
const cells = document.querySelectorAll('[data-cell]');
const restartbutton = document.getElementById('restart-button');
let gameboard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
//let result = document.querySelector('.result');
//let btns = document.querySelectorAll('.btn');
let gameactive = true;
let winningcombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handlecellclick(e){
    const cell = e.target;
    const cellindex = [...cells].indexOf(cell);

    if(gameboard[cellindex] ==='' && gameactive){
        gameboard[cellindex] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.style.color = currentPlayer ==='X' ? '#007bff' : '#ff6b6b';
        toggleplayer();
        checkwinner();
    }
}

function toggleplayer(){
    currentPlayer = currentPlayer ==='X'?'O':'X';
}

function checkwinner(){
    for(const combo of winningcombos){
        const [a,b,c] = combo;
        if(gameboard[a] && gameboard[a]===gameboard[b] && gameboard[a]===gameboard[c]){
            gameactive = false;
            cells[a].style.backgroundColor = '#4caf50';
            cells[b].style.backgroundColor = '#4caf50';
            cells[c].style.backgroundColor = '#4caf50';
            displaywinner(gameboard[a]);
        }
    }
    if(!gameboard.includes('') && gameactive){
        gameactive = false;
        displaywinner('Draw');
    }
}

function displaywinner(winner){
    const resultelement = document.createElement('div');
    resultelement.classList.add('result');
    if(winner==='Draw'){
        resultelement.textContent = 'It\'s a Draw';
    }
    else{
        resultelement.textContent = '${winner} wins!';
    }
    board.appendChild(resultelement);
}

function restartgame(){
    gameboard = ['', '', '', '', '', '', '', '', ''];
    let gameactive = true;
    let currentPlayer = 'X';
    cells.forEach(cell=>{
        cell.textContent = '';
        cell.style.backgroundColor = '#fff';
    });
    const resultelement = document.querySelector('.result');
    if(resultelement){
        resultelement.remove();
    }
}

cells.forEach(cell=>cell.addEventListener('click',handlecellclick));
restartbutton.addEventListener('click',restartgame);





// Function to handle player moves
//const ticTacToe = (element, index) => {
    // Your game logic here

    /*
    **Part 1: Winning Conditions (Add your code here)**

    1. Implement the logic to check for winning conditions using the 'conditions' array.
    2. Display a winning message in the 'result' element when a player wins.
    3. Disable all buttons after a win.
    */

    // Your code to update the game state and check for a win
    // ...

    // Your code to display the current player's turn
    // ...

    // Your code to handle button and cell interactions
    // ...
//};

    /*
    **Part 2: Reset Function (Add your code here)**

    1. Implement a new function that resets the game to its initial state.
    2. Ensure the 'cells', 'btns', and 'currentPlayer' variables are reset.
    3. Update the 'result' element to indicate the current player's turn.
    4. Re-enable all buttons for a new game.
    */

// Function to reset the game
//const resetGame = () => {
    // Your code to reset the game state
    // ...

    // Your code to update the 'result' element
    // ...

    // Your code to re-enable buttons
    // ...
//};

//btns.forEach((btn, i) => {
//    btn.addEventListener('click', () => ticTacToe(btn, i));
//});

//document.querySelector('#reset').addEventListener('click', resetGame);




let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle a player's move
function ticTacToe(btn, index) {
    if (btn.value === '' && !checkWinner()) {
        cells[index] = currentPlayer;
        btn.value = currentPlayer;
        btn.classList.add(currentPlayer);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateResult();
        checkWinner();
    }
}

// Function to check for a winner
function checkWinner() {
    for (let condition of conditions) {
        const [a, b, c] = condition;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            result.innerHTML = `Player ${cells[a]} wins!`;
            enableResetButton();
            return true;
        }
    }
    if (!cells.includes('')) {
        result.innerHTML = "It's a draw!";
        enableResetButton();
        return true;
    }
    return false;
}

// Function to update the result display
function updateResult() {
    document.getElementById('current-player').innerText = currentPlayer;
}

// Function to enable the reset button
function enableResetButton() {
    document.getElementById('reset').disabled = false;
}

// Function to reset the game
function resetGame() {
    cells = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    btns.forEach((btn) => {
        btn.value = '';
        btn.classList.remove('X', 'O');
    });
    result.innerHTML = `Player ${currentPlayer}'s Turn`;
    document.getElementById('reset').disabled = true;
}

// Add click event listeners to the buttons
btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

// Add click event listener to the reset button
document.querySelector('#reset').addEventListener('click', resetGame);


//puppeter
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false, // Set to true for headless mode, or false for a visible browser
        args: ['--disable-gpu', '--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    try {
        await page.goto('https://example.com'); // Replace with your game's URL
        // You can add further interactions with the page if needed
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await browser.close();
    }
})();

//server.js
const express = require('express');
const app = express();
const port = 8081;

app.use(express.static('public'));

app.listen(port, () => console.log(`Server is listening on port ${port}!`));