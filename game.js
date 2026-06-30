// ===============================
// Game Logic
// ===============================

// Check if the snake hits itself
function checkCollision() {

    const head = snake[0];

    for (let i = 1; i < snake.length; i++) {

        if (
            head.x === snake[i].x &&
            head.y === snake[i].y
        ) {

            gameOver();

            return;
        }

    }

}

// End the game
function gameOver() {

    gameRunning = false;

    finalScore.textContent = score;

    gameOverScreen.style.display = "flex";

}

// Play Again button
document.getElementById("playAgain").onclick = () => {

    location.reload();

};
