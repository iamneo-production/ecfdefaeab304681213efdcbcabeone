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