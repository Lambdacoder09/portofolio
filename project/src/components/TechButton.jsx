import React from "react";

function TechButton({ name, color }) {
  return (
    <span
      className={`px-4 py-2 rounded-full text-white font-semibold cursor-default shadow hover:scale-105 transition`}
      style={{ backgroundColor: color }}
    >
      {name}
    </span>
  );
}

export default TechButton;
