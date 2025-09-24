import React from "react";

const CircularProgressBar = ({ percent = 0, size = 2, strokeWidth = 0.15 }) => {
  const radius = size / 2 - strokeWidth;
  const strokeColor =
    percent >= 80 ? "green" : percent >= 50 ? "orange" : "red";
  return (
    <div>
      <svg width={`${size}vw`} height={`${size}vw`}>
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          stroke="white"
          strokeWidth={`${strokeWidth}vw`}
        />
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          stroke={strokeColor}
          fill="none"
          strokeWidth={`${strokeWidth}vw`}
          strokeDasharray={`${2 * Math.PI * radius}vw`}
          strokeDashoffset={`${
            2 * Math.PI * radius - (percent / 100) * 2 * Math.PI * radius
          }vw`}
          transform="rotate(-90)"
          style={{ transformOrigin: "center" }}
          strokeLinecap="round"
        />
        <text
          x={`${size / 2}vw`}
          y={`${size / 2}vw`}
          fill="white"
          fontSize={`${(size * 1) / 3}vw`}
          alignmentBaseline="middle"
          textAnchor="middle"
        >
          {percent}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
