// ===============================
// Controls
// ===============================

document.addEventListener("keydown", (e) => {

    switch (e.key) {

        case "ArrowUp":
            if (dy !== 1) {
                dx = 0;
                dy = -1;
            }
            break;

        case "ArrowDown":
            if (dy !== -1) {
                dx = 0;
                dy = 1;
            }
            break;

        case "ArrowLeft":
            if (dx !== 1) {
                dx = -1;
                dy = 0;
            }
            break;

        case "ArrowRight":
            if (dx !== -1) {
                dx = 1;
                dy = 0;
            }
            break;

    }

});
