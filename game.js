let runs = 0;
let wickets = 0;
let balls = 0;

document.getElementById("bat").addEventListener("click", playBall);
document.getElementById("reset").addEventListener("click", resetGame);

function playBall() {
    if (wickets === 10) return;

    const outcome = Math.floor(Math.random() * 8); // 0–7 (7 = wicket)
    balls++;

    showAnimation(outcome);

    if (outcome === 7) {
        wickets++;
    } else {
        runs += outcome;
    }

    updateScoreboard();

    if (wickets === 10) {
        document.getElementById("result").textContent =
            "All out! Final Score: " + runs;
    }
}

function updateScoreboard() {
    document.getElementById("runs").textContent = runs;
    document.getElementById("wickets").textContent = wickets;

    const overs = Math.floor(balls / 6) + "." + (balls % 6);
    document.getElementById("overs").textContent = overs;
}

function showAnimation(outcome) {
    const ball = document.getElementById("ball");
    const wicket = document.getElementById("wicket");

    ball.classList.add("hidden");
    wicket.classList.add("hidden");

    if (outcome === 7) {
        wicket.classList.remove("hidden");
    } else {
        ball.classList.remove("hidden");
    }

    setTimeout(() => {
        ball.classList.add("hidden");
        wicket.classList.add("hidden");
    }, 600);
}

function resetGame() {
    runs = 0;
    wickets = 0;
    balls = 0;
    updateScoreboard();
    document.getElementById("result").textContent = "";
}
