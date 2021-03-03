
export default function Tile(props) {
    const { turn, setTurn, grids, setGrids, tileId } = props;
    return (
        <div className="Tile" id={tileId} onClick={() => changeTile(turn, setTurn, grids, setGrids, tileId)}>
            {grids[props.tileId]}
        </div>
    )
}

function changeTile(turn, setTurn, grids, setGrids, tileId) {
    let tile = document.getElementById(`${tileId}`);
    tile.classList.toggle("noHover");
    console.log(tile);
    let symbol = (turn) ? "O" : "X";

    let updatedGrid = grids.map((tile, index) => {
        if (index === tileId) {
            tile = symbol;
        }
        return tile;
    });

    setGrids(updatedGrid);
    setTurn(!turn);
}