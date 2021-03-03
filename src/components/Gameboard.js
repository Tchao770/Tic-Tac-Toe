import React, { useRef, useState } from 'react';
import Tile from './Tile';


export default function Gameboard(props) {
    const { gridsInit, grids, setGrids } = props;
    const [turn, setTurn] = useState(true);
    return (
        <div className="GameBoard">
            {gridsInit.map((tile, index) => {
                return (
                    <Tile
                        key={index} tileId={index}
                        turn={turn} setTurn={setTurn}
                        grids={grids} setGrids={setGrids}
                    />
                )
            })}
        </div>
    )
}
