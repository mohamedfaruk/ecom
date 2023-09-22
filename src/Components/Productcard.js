import React from 'react'

const Productcard = (props) => {
  return (
    <div className='card'>
        <img src={props.thumbnail} height={150} width={180} />
    </div>
  )
}

export default Productcard