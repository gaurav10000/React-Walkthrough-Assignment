import React from 'react'

function List({items}) {
  return (
    <div>
        <ul style={{listStyle:"none"}}>
            {items.map((item, index) => {
                return <li key={index}> {index} {item} </li>
            })}
        </ul>
    </div>
  )
}

export default List