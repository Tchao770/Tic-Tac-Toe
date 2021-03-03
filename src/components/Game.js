import React from 'react'
import { useState } from 'react';
import Gameboard from './Gameboard';
import DisplayResults from './Logic/base';

const gridsInit = [
    "", "", "",
    "", "", "",
    "", "", ""
];

export default function Game(props) {
    const { playType } = props;
    const [grids, setGrids] = useState(gridsInit);

    const resetGrid = () => {
        let tiles = document.querySelectorAll(".noHover");

        // Remove noHover class from tiles
        for (let tile of tiles) {
            tile.classList.remove("noHover")
        }

        // Clear the grids upon reset
        let emptyGrid = grids.map(grid => {
            return grid = "";
        })
        setGrids(emptyGrid);
    };

    return (
        <div className="Game">
            <Gameboard gridsInit={gridsInit} grids={grids} setGrids={setGrids} />
            <DisplayResults grid={grids} resetGame={resetGrid} />
        </div>
    )
}
