import { useState } from "react/cjs/react.development";
import Game from "./Game";

export default function Heading() {
    const [playType, setPlayType] = useState("");
    return (
        <div className="App">
            <div className="Menu">
                <h1>Tic Tac Toe</h1>
                <div className="playButton">
                    {/*<button className="Buttons" id="PVC" onClick={() => {
                        setPlayType("PVC");
                        document.getElementById("PVC").classList.toggle("Hold");
                    }}>Player vs. CPU</button>*/}
                    <button className="Buttons" id="PVP" onClick={() => {
                        setPlayType("PVP");
                        document.getElementById("PVP").classList.toggle("Hold");
                    }}>Player vs. Player</button>
                </div>
            </div>
            <Game playType={playType} />
        </div>
    )
}