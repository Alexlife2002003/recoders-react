//Circle.jsx
import React from 'react'
import './OurTeam.css';

const Circle = ({data}) => {
  return (
    <div className="circle">
    <span className="my-text">{data}</span>
  </div>
  )
}

export default Circle