import { useState } from "react";

const winningState =
    [
        [0, 1, 2], [3, 4, 5],
        [6, 7, 8], [0, 3, 6],
        [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

let finished = false;

export default function DisplayResults(props) {
    const { grid, resetGame } = props;
    let { result } = verifyVictory(grid);
    console.log(result + finished);
    const [finish, setFinish] = useState(finished);

    const displayResult = {
        opacity: "1",
        zIndex: "1",
    };
    displayResult.zIndex = (finished) ? "1" : "-1";
    displayResult.opacity = (finished) ? "1" : "0";

    function handleReset() {
        finished = false;
        setFinish(finished);
        resetGame();
        let resultStyle = document.getElementById("result")
        resultStyle.style.zIndex = "-1";
        resultStyle.style.opacity = "0";
    }

    return (
        <div className="Result" id="result" style={displayResult}>
            <h2>{result}</h2>
            <button className="Buttons" onClick={() => handleReset()}>Play Again</button>
        </div>
    )
}


function verifyVictory(grid) {

    let winO = [];
    let winX = [];
    let result = "";

    for (var i = 0; i < grid.length; i++) {
        if (grid[i] === 'O') {
            winO.push(i);
        }
        else if (grid[i] === 'X') {
            winX.push(i);
        }
    }
    let totalLen = winO.length + winX.length;

    for (let winString of winningState) {
        let wO = [];
        let wX = [];
        for (let i = 0; i < winString.length; i++) {
            if (winO.includes(winString[i]))
                wO.push(winString[i]);
            else if (winX.includes(winString[i]))
                wX.push(winString[i]);
        }
        if (wO.length === 3) {
            result = "Player O Won!";
            finished = true;
        }
        else if (wX.length === 3) {
            result = "Player X Won!";
            finished = true;
        }
        else if ((totalLen === 9)) {
            result = "Draw!";
            finished = true;
        }
    }
    return { result };
}