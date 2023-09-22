import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {RemoveItem, decrement, increment} from '../Features/UseReducer'


const Cart = () => {
    const listData = useSelector(state => state.carts.list)
    const dispatch = useDispatch()
    

    const handleincrement = (id) => {
        dispatch(increment({ id }))
    }

    const handleDecrement = (id) => {        
        dispatch(decrement({ id }))
    }

    const deleteItem = (items) => {
        dispatch(RemoveItem(items))
    }

    return (
        <ul>
            {/* <img src={listData.thumbnail} height={150} width={180} />
            <h5>{listData.title}</h5>
            <h6>Price: {`$${listData.price}`}</h6> */}
        {listData.map((items) =>
        (
            <li className='cartList'>
            <span>Item No. {items.id}</span>   
            <img src={items.thumbnail} height={150} width={180} />
            <h5>{items.title}</h5>
            <h6>Price: {`$${items.price}`}</h6>
            <button onClick={()=>handleDecrement(items.id)}>-</button>
            <span>Quantity {items.value}</span>
            <button onClick={()=>handleincrement(items.id)}>+</button>
            <button onClick={()=>deleteItem(items)}>Remove</button>
            </li>
            )           
        )}          
      </ul>
      
  )
}

export default Cart