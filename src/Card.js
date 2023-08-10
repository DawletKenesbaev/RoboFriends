import React from 'react'







function Card({id,name,gmail}) {
  return (
    <div className='bg-light-green dib br3 ma2 shadow-4 grow'>
      <img src={`https://robohash.org/${id}`}/>
      <h3>{name}</h3>
      <p>{gmail}</p>
    </div>
  )
}

export default Card