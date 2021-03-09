import React from "react"

export const CloseX = ({ clName, closeX, fn }) => (
  <svg
    className={clName}
    onClick={fn}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      className={closeX}
      d="M18.707 6.707l-1.414-1.414L12 10.586 6.707 5.293 5.293 6.707 10.586 12l-5.293 5.293 1.414 1.414L12 13.414l5.293 5.293 1.414-1.414L13.414 12z"
    />
  </svg>
)
