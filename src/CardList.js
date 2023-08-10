import React from 'react'
import Card from './Card'
function CardList({robots}) {
 console.log(robots);
 
  return (
    <div>
        {robots.map((item,index)=>{
         return  <Card 
         key={index}
         id={item.id}
         name={item.name} 
         gmail={item.email} />

      })}
      
    </div>
  )
}

export default CardList