// ===============================
// Snake X - Main Engine
// ===============================

// Canvas
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Grid
const gridSize = 25;
const tileCount = canvas.width / gridSize;

// Game State
let gameRunning = false;
let gamePaused = false;

// Score
let score = 0;
let highScore = localStorage.getItem("snakeHighScore") || 0;

document.getElementById("highScore").textContent = highScore;

// Snake
let snake = [
    { x: 10, y: 10 }
];

// Direction
let dx = 1;
let dy = 0;

// Food
let food = {
    x: 15,
    y: 10
};

// Speed
let gameSpeed = 8;

// Timer
let lastFrame = 0;

// Buttons
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const restartBtn = document.getElementById("restartBtn");
const gameOverScreen = document.getElementById("gameOverScreen");
const finalScore = document.getElementById("finalScore");

// Start
startBtn.onclick = () => {
    if (!gameRunning) {
        gameRunning = true;
        requestAnimationFrame(gameLoop);
    }
};

// Pause
pauseBtn.onclick = () => {
    gamePaused = !gamePaused;
};

// Restart
restartBtn.onclick = () => {
    location.reload();
};

// Main Loop
function gameLoop(timestamp) {

    if (!gameRunning) return;

    if (gamePaused) {
        requestAnimationFrame(gameLoop);
        return;
    }

    if (timestamp - lastFrame > 1000 / gameSpeed) {

        lastFrame = timestamp;

        update();
        draw();

    }

    requestAnimationFrame(gameLoop);

}

// Placeholder Functions
function update() {

    moveSnake();

    checkFood();

    checkCollision();

}
function draw() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="#08131f";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    drawFood();

    drawSnake();

}
randomFood();
