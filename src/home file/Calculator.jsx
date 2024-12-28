
import React, { useState } from "react";

const Calculator = () => {

    const [input, setInput] = useState("");

    const handleClick = (value) => {
    setInput((prev) => prev + value);
    };

    const clearInput = () => {
    setInput("");
    };

    const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
    };

    return (


        <div>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <div className="mb-4">
        <input
        type="text"
        value={input}
        readOnly
        className="w-full text-right text-xl p-2 border rounded border-gray-300 focus:outline-none"
        />
        </div>
        <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", ".", "0", "=", "+"].map((value) => (
        <button
        key={value}
        onClick={() => (value === "=" ? calculate() : handleClick(value))}
        className="bg-gray-200 text-black font-medium py-2 rounded hover:bg-gray-300 focus:outline-none"
        >
        {value}
        </button>
        ))}
        <button
        onClick={clearInput}
        className="col-span-4 bg-red-500 text-white font-medium py-2 rounded hover:bg-red-600 focus:outline-none"
        >
        Clear
        </button>
        </div>
        </div>
        </div> 
        </div>


    );
};

export default Calculator;
