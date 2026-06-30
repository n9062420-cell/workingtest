// ===============================
// Food System
// ===============================

// Generate food in a random position
function randomFood() {

    let valid = false;

    while (!valid) {

        food.x = Math.floor(Math.random() * tileCount);
        food.y = Math.floor(Math.random() * tileCount);

        valid = true;

        // Make sure food doesn't spawn on the snake
        for (const part of snake) {
            if (part.x === food.x && part.y === food.y) {
                valid = false;
                break;
            }
        }
    }
}

// Draw the apple
function drawFood() {

    const x = food.x * gridSize + gridSize / 2;
    const y = food.y * gridSize + gridSize / 2;

    // Glow
    ctx.shadowColor = "red";
    ctx.shadowBlur = 25;

    // Apple
    ctx.beginPath();
    ctx.fillStyle = "#ff2d55";
    ctx.arc(x, y, gridSize / 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Leaf
    ctx.beginPath();
    ctx.fillStyle = "#32cd32";
    ctx.ellipse(
        x + 5,
        y - 10,
        4,
        8,
        Math.PI / 4,
        0,
        Math.PI * 2
    );
    ctx.fill();

    ctx.shadowBlur = 0;
}

// Check if the snake has eaten the food
function checkFood() {

    const head = snake[0];

    if (head.x === food.x && head.y === food.y) {

        score++;

        document.getElementById("score").textContent = score;

        // Grow the snake
        const tail = snake[snake.length - 1];
        snake.push({
            x: tail.x,
            y: tail.y
        });

        // Update high score
        if (score > highScore) {
            highScore = score;
            localStorage.setItem("snakeHighScore", highScore);
            document.getElementById("highScore").textContent = highScore;
        }

        randomFood();
    }
}
