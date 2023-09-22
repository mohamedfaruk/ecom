import React from 'react'

const CartList = (props) => {
  return (
    <div className='flexcart'>
    <img src={props.thumbnail} height={150} width={180} />
    <h5>{props.title}</h5>
    <h6>Price: {`$${props.price}`}</h6>
    </div>
  )
}

export default CartList