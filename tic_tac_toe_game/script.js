const col = document.getElementsByClassName("col")
const menu = document.getElementsByClassName("menu")
const winnerTitle = document.getElementsByClassName("winner")
let gameBoard = ["", "", "", "", "", "", "", "", ""];
const humanPlayer = "X";
const aiPlayer = "O";
let currentPlayer = humanPlayer;
let gameOver = false


function checkWinner() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (
            gameBoard[a] &&
            gameBoard[a] === gameBoard[b] &&
            gameBoard[a] === gameBoard[c]
        ) {
            return gameBoard[a];
        }
    }

    if (!gameBoard.includes("")) {
        return "draw";
    }

    return null;
}

for (let j = 0; j < menu.length; j++) {
    menu[j].addEventListener("click", function () {
        if (this.innerHTML === "Start") {
            document.getElementsByClassName('hero1')[0].style.display = "block"

        } else if (this.innerHTML === "Exit") {
            document.getElementsByClassName('hero1')[0].style.display = "none"
            for (let i = 0; i < col.length; i++) {
                col[i].innerHTML = ""
                gameBoard[i] = ""
                winnerTitle[0].innerHTML = ""
            }
        } else if (this.innerHTML === "Clear") {
            for (let i = 0; i < col.length; i++) {
                col[i].innerHTML = ""
                gameBoard[i] = ""
                winnerTitle[0].innerHTML = ""
            }
        }
    })
}

function makeMove(index) {
    if (gameBoard[index] === "") {
        gameBoard[index] = currentPlayer;
        col[index].textContent = currentPlayer;
        const winner = checkWinner();
        if (winner) {
            if (winner === "draw") {
                winnerTitle[0].innerHTML = ("It's a draw!");
            } else {
                winnerTitle[0].innerHTML = (`${winner} wins!`);
                document.getElementsByClassName("confetti")[0].innerHTML = `<div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>`

                setTimeout(() => { document.getElementsByClassName("confetti")[0].innerHTML = "" }, 4000)
            }
            gameOver = true;
            return;
        }

        currentPlayer =
            currentPlayer === humanPlayer ? aiPlayer : humanPlayer;
        if (currentPlayer === aiPlayer) {
            setTimeout(aiMove, 500);
        }
    }

}

function aiMove() {
    let bestScore = -Infinity;
    let bestMove;

    for (let i = 0; i < 9; i++) {
        if (gameBoard[i] === "") {
            gameBoard[i] = aiPlayer;
            const score = minimax(gameBoard, 0, false);
            gameBoard[i] = "";
            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }

    makeMove(bestMove);
}

function minimax(board, depth, isMaximizing) {
    const scores = {
        X: -10,
        O: 10,
        draw: 0,
    };

    const winner = checkWinner();
    if (winner !== null) {
        return scores[winner];
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === "") {
                board[i] = aiPlayer;
                const score = minimax(board, depth + 1, false);
                board[i] = "";
                bestScore = Math.max(bestScore, score);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === "") {
                board[i] = humanPlayer;
                const score = minimax(board, depth + 1, true);
                board[i] = "";
                bestScore = Math.min(bestScore, score);
            }
        }
        return bestScore;
    }
}





