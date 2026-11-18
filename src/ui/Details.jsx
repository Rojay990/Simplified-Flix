import React from 'react'

const Details = ({ header, text }) => {
  return (
    <div className='movie-details__detail'>
      <h3>{header}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Details