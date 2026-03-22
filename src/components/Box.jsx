import React from "react";
import "./Box.css";

const Box = ({
  digit,
  index,
  dragOverIndex,
  handleDragStart,
  handleDragOver,
  handleDrop,
}) => {
  return (
    <div
      className={`box ${dragOverIndex === index ? "drag-over" : ""}`}
      draggable
      onDragStart={() => handleDragStart(index)}
      onDragOver={(e) => handleDragOver(e, index)}
      onDrop={() => handleDrop(index)}
    >
      {digit}
    </div>
  );
};

export default React.memo(Box);
