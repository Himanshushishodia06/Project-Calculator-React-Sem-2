import { useState } from "react";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "AC") {
      setInput("");
    } else if (value === "Del") {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    ["AC", "Del", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["00", "0", ".", "="],
  ];

  return (
    <div className="container">
      <div className="calculator">
        <input type="text" value={input} placeholder="0" readOnly />

        {buttons.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((btn, index) => (
              <button
                key={index}
                onClick={() => handleClick(btn)}
                className={
                  btn === "=" || ["+", "-", "*", "/", "%"].includes(btn)
                    ? "operator"
                    : ""
                }
              >
                {btn}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}