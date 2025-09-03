import { useState } from "react"; // Used to remember state in a component

// A component that renders a single square of the tic-tac-toe board  
function Square() {
    const [value, setValue] = useState(null); // State to remember the value of the square (X, O, or null)

    function handleClick() {
        setValue("X"); // Set the value to "X" when the square is clicked
        // console.log("clicked!");
    }
// Render a button representing the square
    return (
        <button
            className="w-[33px] h-[33px] min-w-[33px] min-h-[33px] flex items-center justify-center border border-gray-400 text-lg p-0"
            onClick={handleClick}
        >
            {value === null ? '\u00A0' : value}
        </button>
    );
}

export default function Board() {
    return (
        <>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </>
    );
}