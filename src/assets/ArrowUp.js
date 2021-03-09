import React from "react"

export const Arrow = ({ fill, fn, state }) => (
  <svg
    onClick={fn}
    className={`arrow ${state ? "arrowrotate" : ""}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      fill={fill}
      d="M19.293 16.707L12 9.414l-7.293 7.293-1.414-1.414L12 6.586l8.707 8.707z"
    />
  </svg>
)
