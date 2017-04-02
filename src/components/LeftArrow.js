import React from 'react'

const LeftArrow = ({ size, color }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={ size }
    height={ size }
    viewBox='0 0 26.776 26.776'
  >
    <path
      d='M.378 12.861l9.982-8.26s1.182-1.252 1.182.11v4.654H26.067s.708-.188.708.882v6.551c0 .768-.592.747-.592.747H11.84v4.299c0 1.653-1.242.405-1.242.405S1.275 15.224.296 14.246c-.712-.709.082-1.385.082-1.385z'
      fill={ color }
    />
  </svg>
)

export default LeftArrow
