// ===============================
// Snake Functions
// ===============================

// Move Snake
function moveSnake() {

    const head = {
        x: snake[0].x + dx,
        y: snake[0].y + dy
    };

    // Wrap around screen
    if (head.x < 0) head.x = tileCount - 1;
    if (head.x >= tileCount) head.x = 0;

    if (head.y < 0) head.y = tileCount - 1;
    if (head.y >= tileCount) head.y = 0;

    snake.unshift(head);

    snake.pop();
}

// Draw Snake
function drawSnake() {

    snake.forEach((segment, index) => {

        // Head
        if (index === 0) {
            ctx.fillStyle = "#00ff99";
        } else {
            ctx.fillStyle = "#00ffaa";
        }

        // Glow
        ctx.shadowColor = "#00ff99";
        ctx.shadowBlur = 20;

        // Rounded body
        ctx.beginPath();
        ctx.roundRect(
            segment.x * gridSize + 2,
            segment.y * gridSize + 2,
            gridSize - 4,
            gridSize - 4,
            8
        );
        ctx.fill();

    });

    ctx.shadowBlur = 0;

}
