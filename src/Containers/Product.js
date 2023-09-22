import React from 'react'
import { useParams } from "react-router-dom"
import ProductList from '../Data/ProductList'
import { useDispatch } from 'react-redux'
import {AddItem} from '../Features/UseReducer'


const Product = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const item = ProductList.find(prod => prod.id === parseInt(params.userID));

  const addTocart = () => {
    dispatch(AddItem(item))
  }


  return (          
      <div>
        <img src={item.thumbnail} height={150} width={180} />
        <h5>{item.title}</h5>
        <h6>Price: {`$${item.price}`}</h6>   
        <div>
          <button className='buy' onClick={addTocart}>Add to cart</button>
        </div>    
      </div>
  )
}

export default Product