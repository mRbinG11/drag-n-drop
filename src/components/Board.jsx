import { useState } from "react";
import "./Board.css";
import Box from "./Box";

export const Board = () => {
  const [digits, setDigits] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (event, index) => {
    event.preventDefault(); // allow drop
    setDragOverIndex(index);
  };

  const handleDrop = (index) => {
    const updated = [...digits];
    const draggedItem = updated[draggedIndex];
    updated.splice(draggedIndex, 1);
    updated.splice(index, 0, draggedItem);
    setDigits(updated);
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div className="card">
      <h1>Drag & Drop Digits</h1>
      <p>Drag the boxes to reorder the digits 0-9.</p>
      <div className="board">
        {digits.map((digit, index) => (
          <Box
            key={digit}
            digit={digit}
            index={index}
            dragOverIndex={dragOverIndex}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
          />
        ))}
      </div>
      <p>
        Tip: Try reordering to make <span>0123456789</span> or reverse it!
      </p>
    </div>
  );
};
