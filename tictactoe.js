var currentPlayer = "X";
var nextPlayer = "O";

var playerXSelections = new Array();
var playerOSelections = new Array();

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

handleClick = function (event) {
    var cell = event.target;
    cell.innerHTML = currentPlayer;

    if (currentPlayer === "X") {
        playerSelections = playerXSelections;
        nextPlayer = "O";
    } else {
        playerSelections = playerOSelections;
        nextPlayer = "X";
    }

    playerSelections.push(parseInt(cell.id));

    if (checkWinner(playerSelections)) {
        alert("Player " + currentPlayer + " wins!")
        resetGame();
    }

    if (checkDraw()) {
        alert("Draw!");
        resetGame();
    }

    // Swap Players
    currentPlayer = nextPlayer;
}


var cells = document.querySelectorAll("td");

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick)
}

//checking for winner
function checkWinner(playerArr) {
    for (var i = 0; i < winningCombinations.length; i++) {
        var matches = 0;
        for (var j = 0; j < winningCombinations[i].length; j++) {
            if (playerArr.includes(winningCombinations[i][j])) {
                matches++;
                console.log(i)
            } else {
                break;
            }
        }
        if (matches >= 3) {
            return true;
        }
    }
}

/* CHECKING FOR DRAW */
function checkDraw() {
    return playerOSelections.length + playerXSelections.length >= cells.length
}

/* ENDING THE GAME */
function resetGame() {
    playerXSelections = new Array();
    playerOSelections = new Array();
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = ""
    }
}