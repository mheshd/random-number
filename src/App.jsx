import React, { useState } from "react";

const App = () => {
  const [numDice, setNumDice] = useState(1);
  const [diceType, setDiceType] = useState(6);
  const [result, setResult] = useState([]);
  const [total, setTotal] = useState(0);

  const rollDice = () => {
    const diceResults = [];
    let totalsum = 0;
    for (let i = 0; i < numDice; i++) {
      const roll = Math.floor(Math.random() * diceType) + 1;
      diceResults.push(roll);
      totalsum += roll;
    }
    setResult(diceResults);
    setTotal(totalsum);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center space-y-6">
        <h1 className="text-3xl font-bold text-indigo-700">🎲 Dice Roller</h1>

        <div className="space-y-4">
          <div className="flex flex-col items-start">
            <label className="text-sm font-semibold text-gray-700 mb-1">
              Number of Dice
            </label>
            <input
              type="number"
              min="1"
              value={numDice}
              onChange={(e) => setNumDice(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex flex-col items-start">
            <label className="text-sm font-semibold text-gray-700 mb-1">
              Dice Type
            </label>
            <select
              value={diceType}
              onChange={(e) => setDiceType(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="4">D4</option>
              <option value="6">D6</option>
              <option value="8">D8</option>
              <option value="10">D10</option>
              <option value="12">D12</option>
              <option value="16">D16</option>
            </select>
          </div>

          <button
            onClick={rollDice}
            className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 transition"
          >
            Roll Dice
          </button>
        </div>

        <div className="text-left">
          <h2 className="text-xl font-bold text-gray-800 mb-2">🎯 Result</h2>
          <p className="text-gray-700">
            <strong>Dice Rolled:</strong> {numDice}
          </p>
          <p className="text-gray-700">
            <strong>Dice Type:</strong> D{diceType}
          </p>
          <p className="text-gray-700">
            <strong>Individual Rolls:</strong>{" "}
            {result.length > 0 ? result.join(", ") : "-"}
          </p>
          <p className="text-gray-700">
            <strong>Total:</strong> {total}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
